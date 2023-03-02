import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import './CorrectAnswer.css'

const CorrectAnswer = () => {

    const data = useLoaderData()

    const { state } = useLocation()
    const answeredQuestions = state.answeredQuestion
    console.log(answeredQuestions)
    console.log(data[0]?.questions)
    // !== answeredQuestion.question.correctAnswer  
    // ${question.correctAnswer === option && "bg-success text-white "}  ${answeredQuestions.map(answeredQuestion => question.question === answeredQuestion.question && answeredQuestion.anseredQestion !== question.question.correctAnswer)
    const ans = answeredQuestions.map(answeredQuestion => answeredQuestion.anseredQestion !== answeredQuestion.question.correctAnswer)
    if (ans == false) {
        console.log("wrong")

    } else {
        console.log("right")
    }

    const asnq = answeredQuestions.map(answeredQuestion => (answeredQuestion.question.question))
    console.log(asnq);
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
                                className={`${question.correctAnswer === option && "bg-success text-white "}  ${answeredQuestions.map(answeredQuestion => answeredQuestion.question.question !== question.question) && ""}   option `}
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