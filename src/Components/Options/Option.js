import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./option.css"


const Option = ({ option, question, setCorrectCount, correctCount }) => {
    const [selected, setSelected] = useState('')
    console.log(selected)
    const [classes, setClasses] = useState('')


    console.log(classes);
    console.log(selected)
    const handleOption = (getOption) => {
        setSelected(getOption)
        const correctAns = question.correctAnswer;
        if (correctAns === getOption) {

            setClasses('correct')
            setCorrectCount(correctCount + 1)
        }
        else {

            setClasses('incorrect')
        }
        console.log(correctAns);

        console.log(getOption)

    }

    return (
        <div>
            <div className=' mx-3  my-2   '>


                <button className={`option ${classes} `} disabled={selected} onClick={() => handleOption(option)}>{option}</button >

                <ToastContainer
                    position='top-center'
                />


            </div>
        </div>
    );
};

export default Option;