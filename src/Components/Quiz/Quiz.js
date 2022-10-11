import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Options/Option';
import './Quiz.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { EyeIcon} from '@heroicons/react/24/solid'


const Quiz = () => {
    const quizDetails=useLoaderData();
    
    const {name}=quizDetails.data
    
    const showToast=(getOption)=>{
        
        toast(getOption.correctAnswer)
         console.log(getOption)
          
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
                    <div className='question-icon'>
                        <h4 className='question  '>{question.question}</h4>
                        <EyeIcon onClick={()=>showToast(question)} className=" icon text-blue-500"/>
                    </div>


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