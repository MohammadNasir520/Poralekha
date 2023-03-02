import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Quiz.css'

import 'react-toastify/dist/ReactToastify.css';


import { EyeIcon } from '@heroicons/react/24/solid'
import AQuiz from '../AQuiz/AQuiz';


const Quiz = () => {


    const [answered, setAnswered] = useState(0)
    const [correctAnsCount, setCorrectAnsCount] = useState(0)
    const [wrongAnsCount, setWrongAnsCount] = useState(0)


    const result = { answered, correctAnsCount, wrongAnsCount }


    // stored answered option for checking correct anser
    const [answeredQuestion, setAnsweredQuestion] = useState([])
    console.log(answeredQuestion)



    let serial = 0;
    const quizDetails = useLoaderData();
    console.log("quizDeatails", quizDetails)


    const id = quizDetails[0].id
    console.log(id);


    const { name } = quizDetails[0].name



    return (
        <div>
            <h2>  Take a Quiz about : <span className='text-success'>{name}</span> </h2>

            <div>
                {
                    // quizDetails.data.questions.map(question => {
                    quizDetails[0].questions.map((question, index) => {
                        serial++;
                        return <AQuiz
                            key={index}
                            serial={serial}
                            question={question}
                            setAnsweredQuestion={setAnsweredQuestion}
                            answeredQuestion={answeredQuestion}


                            answered={answered}
                            setAnswered={setAnswered}

                            correctAnsCount={correctAnsCount}
                            setCorrectAnsCount={setCorrectAnsCount}


                            wrongAnsCount={wrongAnsCount}
                            setWrongAnsCount={setWrongAnsCount}
                        ></AQuiz>
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
            <Link to="/result" state={{ id, answeredQuestion, result }}><button className='btn btn-primary'>Submit</button></Link>
        </div >
    );
};

export default Quiz;