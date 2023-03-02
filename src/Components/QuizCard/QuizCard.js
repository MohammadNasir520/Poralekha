import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    console.log(quiz)
    const { id, logo, name, total } = quiz;

    const [loading, setLoading] = useState(false)

    return (
        <div className='quiz '>
            <img src={logo} alt="" />
            <h2>{name}</h2>

            {/* <h6>Total Quiz: {total}</h6> */}
            {/* <Link to={`/quiz/${id}`}> */}
            <Link to={`/topic/${name}`}>
                <button
                    onClick={() => setLoading(true)}
                    className='btn btn-primary px-4'>
                    {
                        loading ? "Loading..." : " Go to Topics"
                    }
                </button>
            </Link>
        </div>
    );
};

export default QuizCard;