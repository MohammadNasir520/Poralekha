import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
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
                    
                <div className='question-container border border-primary m-5 py-2 text-light  '

                     key={question.id}>

                    {/* question */}
                    <h4>{question.question}</h4>


                    {/* options */}
                    <div className='option'>
                        {
                            question.options.map(option=>
                                
                                 <p className=' mx-5  m-2   ' key={option.id}>

                                  <form action="" className=''>
                                   <label  htmlFor={option}>
                                   <input type="checkbox" name="option" id={option} /> {option}
                                   </label>
                                  </form>
                                    
                                    </p>)
                        }
                    </div>
                


                
                </div>)
            }
          </div>
        </div>
    );
};

export default Quiz;