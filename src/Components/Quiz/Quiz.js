import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Options/Option';
import './Quiz.css'
const Quiz = () => {
    const quizDetails=useLoaderData();
    console.log(quizDetails.data)
    const {name}=quizDetails.data
    
    const showToast=(cAns)=>{
console.log(cAns)
 
    }
   
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
                           
                            question.options.map((option,index)=> <Option

                            option={option}
                            key={index}
                            question={question}
                        ></Option>
                                    )
                                    
                        }
                       
                    </div>
                


                
                </div>)
            }
          </div>
        </div>
    );
};

export default Quiz;