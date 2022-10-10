import React from 'react';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    const {logo,name,total}=quiz;
    console.log(quiz);
    return (
        <div className='quiz '>
            <img src={logo} alt="" />
            <h2>{name}</h2>

            <h6>Total Quiz: {total}</h6>
            <button className='btn btn-primary px-4'>Start Quiz</button>
        </div>
    );
};

export default QuizCard;