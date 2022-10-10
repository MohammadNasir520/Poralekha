import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizDetails=useLoaderData();
    console.log(quizDetails.data)
    // console.log(quizDetails.data.questions.map(question=> console.log(question)))
    const {name}=quizDetails.data
    //  const questionss =quizDetails.data.questions.map(question=> question);
    //  const question=questionss.find(q=> q.id===questionss.id)
    //  console.log(question);
    return (
        <div>
          <h2>  Take a Quize about : <span className='text-success'>{name}</span> </h2>
          <div>
            {
                quizDetails.data.questions.map(question=> 
                <div className='border border-primary'
                key={question.id}>
                    
                    <p>{question.question}</p>

                    <div>
                        {
                            question.options.map(option=> <p>"{option}</p>)
                        }
                    </div>
                
                
                </div>)
            }
          </div>
        </div>
    );
};

export default Quiz;