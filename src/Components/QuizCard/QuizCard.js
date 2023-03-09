import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    console.log(quiz)
    const { id, logo, name, total } = quiz;

    const [loading, setLoading] = useState(false)

    return (
        <div className='quiz '>
            <Link
                to={`/topic/${name}`}
                onClick={() => setLoading(true)}
            >
                <img src={logo} alt="" />
                <h2>{name}</h2>

                {/* <h6>Total Quiz: {total}</h6> */}
                {/* <Link to={`/quiz/${id}`}> */}




                {
                    loading && "Loading..."
                }

            </Link>
        </div>
    );
};

export default QuizCard;