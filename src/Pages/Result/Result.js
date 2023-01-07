import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexte/Authprovider';
import './Result.css'
const Result = () => {
    const { answered, correctAnsCount, wrongAnsCount } = useContext(AuthContext)
    const negetiveMark = wrongAnsCount * .50;
    const finalMarks = correctAnsCount - negetiveMark;
    return (
        <div className='d-flex justify-content-center'>


            <div style={{ background: 'white', position: 'absolute', top: '50%', }}>
                <h3>You have Answered : {answered} questions</h3>
                <div className='results'>
                    <div className='mt-3 bg-info'><h6>correct: {correctAnsCount}</h6></div>
                    <div className='mt-3 bg-info'><h6>Wrong: {wrongAnsCount}</h6></div>
                    <div className='mt-3 bg-info'><h6>Negative: {wrongAnsCount} x .50= {negetiveMark}</h6></div>
                </div>
                <h5>Final Marks: {finalMarks}</h5>
            </div>

        </div>

    );
};

export default Result;