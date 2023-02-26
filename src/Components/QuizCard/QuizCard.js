import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({quiz}) => {
    const {id,logo,name,total}=quiz;
   
    return (
        <div className='quiz '>
            <img src={logo} alt="" />
            <h2>{name}</h2>

            <h6>Total Quiz: {total}</h6>
          <Link to={`/quiz/${id}`}>  <button className='btn btn-primary px-4'>Start Quiz</button></Link>
        </div>
    );
};

export default QuizCard;