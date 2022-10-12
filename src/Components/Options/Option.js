import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./option.css"

const Option = ({option,question}) => {
  
   const showToast=(getOption)=>{
       const correctAns=question.correctAnswer;
       if (correctAns === getOption){
        toast('correct answer')
       }
       else{
        toast('incorrect');
       }
       console.log(correctAns);
       
        console.log(getOption)
         
            }
           
    return (
        <div>
               <div className=' mx-5  m-2   '>


               <p className='option' onClick={()=>showToast(option)}>{option}</p>

               <ToastContainer 
               position='top-center'
               />
 
  
  </div>
        </div>
    );
};

export default Option;