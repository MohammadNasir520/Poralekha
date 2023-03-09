
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { saveUer } from '../../api/usersApi';
import { AuthContext } from '../../Contexte/Authprovider';




const SignUp = () => {


    const { createUserByEmailAndPss, updateUser } = useContext(AuthContext)
    const [error, seterror] = useState('')


    const navigate = useNavigate();




    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = event => {
        event.preventDefault()



        const userName = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const image = event.target.image.files[0]


        console.log(userName, email, password)

        createUserByEmailAndPss(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                seterror('')
                toast(`youur acco `)
                const createdUser = {
                    userName,
                    email,

                }
                updateUser(createdUser)

                // save user to database
                saveUer(createdUser)
                    .then(data => {
                        console.log(data)
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error)
                seterror(error.message)
            })
        // console.log(createdUser)


    }



    return (
        <>

            <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://t4.ftcdn.net/jpg/04/44/90/69/240_F_444906906_EMcNCw95irM6vNDcbiwzd1fYshRpWw78.jpg') ` }}>
                <div className="rounded-xl bg-gray-800 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                    <div className="text-white">

                        <form onSubmit={handleSignUp}>
                            <div className="mb-1 text-lg flex flex-col">
                                <label htmlFor="" className="label text-start">
                                    <span className='label-text text-white'>Your Full Name </span>
                                </label>
                                <input
                                    className="w-72 border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name" />
                            </div>
                            <div className="mb- text-lg flex flex-col">
                                <label htmlFor="" className="label text-start">
                                    <span className='label-text text-white'>Your Email</span>
                                </label>
                                <input
                                    className="w-72 border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit  placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email" />
                            </div>

                            <div className="mb- text-lg w-72 flex flex-col">
                                <label htmlFor="" className="label text-start">
                                    <span className='label-text text-white'>Password</span>
                                </label>
                                <input
                                    className="w-72 rounded border-none bg-emerald-300 bg-opacity-10 px-6 py-1 text-center text-inherit  placeholder-gray-400 shadow-lg outline-none backdrop-blur-md"
                                    type="Password"
                                    name="password"
                                    placeholder="Enter your password"

                                />

                            </div>
                            {/* upload image */}
                            {/* <div className="mb- text-lg">
                                <label htmlFor="" className="label">
                                    <span className='label-text text-white'>Your Photo</span>
                                </label>
                                <input
                                    className="w-72  rounded border-none bg-emerald-300 bg-opacity-10 px-8 py-1 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                                    type="file"
                                    name="image"
                                    placeholder="*********"

                                />
                            </div> */}

                            <p>{error}</p>
                            <div className="mt-4 flex justify-center text-lg text-black">
                                <button
                                    type="submit"
                                    className=" bg-cyan-500 bg-opacity-50 px-5 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600 outline-none">
                                    SignUp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;