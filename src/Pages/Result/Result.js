import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexte/Authprovider';
import './Result.css'
const Result = () => {
    // const { answered, correctAnsCount, wrongAnsCount } = useContext(AuthContext)



    const { state } = useLocation()
    const id = state.id;
    const { answered, correctAnsCount, wrongAnsCount } = state.result;
    const answeredQuestion = state.answeredQuestion;
    console.log(answeredQuestion)

    const negetiveMark = wrongAnsCount * .50;
    const finalMarks = correctAnsCount - negetiveMark;
    return (
        <div className='d-flex justify-content-center align-items-center '>


            <div style={{ background: 'white', height: "75vh", display: 'grid', placeItems: 'center' }}>
                <div>
                    <h3 className='text-2xl'>You have Answered : {answered} questions</h3>
                    <div className='results text-2xl '>
                        <div className='mt-3 bg-cyan-600 text-white font-bold'><h6>correct: {correctAnsCount}</h6></div>
                        <div className='mt-3 bg-cyan-600 text-white font-bold'><h6>Wrong: {wrongAnsCount}</h6></div>
                        <div className='mt-3 bg-cyan-600 text-red-200 font-bold'><h6>Negative: {wrongAnsCount} x .50= {negetiveMark}</h6></div>
                    </div>
                    <h5 className={finalMarks < 0 ? 'text-red-500 font-bold  text-2xl ' : 'text-green-500 font-bold  text-2xl '}>Final Marks: {finalMarks}</h5>


                    <Link to={`/coorrectAnswer/${id}`} state={{ id, answeredQuestion }}>
                        <button
                            className='bg-blue-600 text-white p-1'
                        >See correct Answer</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default Result;