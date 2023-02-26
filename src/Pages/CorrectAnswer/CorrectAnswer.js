import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CorrectAnswer.css'

const CorrectAnswer = () => {

    const data = useLoaderData()
    console.log(data[0]?.questions)
    return (
        <div>
            correct ans
            {
                data[0]?.questions?.map(question => <div

                >
                    <div className='border border-primary m-3 '>
                        <p className='questions'>  {question.question}</p>

                        {
                            question?.options?.map(option => <p
                                className={`${question.correctAnswer === option && "bg-success text-white "} option `}
                            >{option}</p>)
                        }
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default CorrectAnswer;