import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Option from '../Options/Option';
import './Quiz.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { EyeIcon } from '@heroicons/react/24/solid'
import AQuiz from '../AQuiz/AQuiz';


const Quiz = () => {
    // const [selected, setSelected] = useState('')
    // console.log(selected);
    const [correctCount, setCorrectCount] = useState(0)

    let serial = 0;
    const quizDetails = useLoaderData();

    console.log("quizDeatails", quizDetails)
    const { name } = quizDetails.data

    const showToast = (getOption) => {

        toast(getOption.correctAnswer)
        console.log(getOption)

    }

    return (
        <div>
            <h2>  Take a Quize about : <span className='text-success'>{name}</span> </h2>
            <h4>Your total Correct Answer: {correctCount}</h4>
            <div>
                {
                    quizDetails.data.questions.map(question => {
                        serial++;
                        return <AQuiz serial={serial} question={question}></AQuiz>
                    }

                        // < div className='question-container border border-primary m-5 py-2 text-light  '

                        //     key={question.id} >

                        //     {/* question */}
                        //     < div className='question-icon' >
                        //         <h4 className='question  '>{question.question}</h4>
                        //         <div> <EyeIcon onClick={() => showToast(question)} className=" icon text-blue-500" /></div>
                        //     </div>


                        //     {/* options */}
                        //     <div className='options'>



                        //         {

                        //             question.options.map((option, index) =>

                        //                 <Option

                        //                     option={option}
                        //                     key={index}
                        //                     question={question}
                        //                     correctCount={correctCount}
                        //                     setCorrectCount={setCorrectCount}
                        //                 ></Option>

                        //                 // <button disabled={selected} onClick={() => setSelected(option)} className='bg-success'>{option}</button>
                        //             )
                        //         }

                        //     </div>




                        // </div>
                    )
                }


            </div >
            <Link to="/result"><button className='btn btn-primary'>Submit</button></Link>
        </div >
    );
};

export default Quiz;