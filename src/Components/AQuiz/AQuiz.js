import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import './AQuiz.css';

const AQuiz = ({ question, setCorrectCount, correctCount }) => {
    const [selected, setSelected] = useState('')
    console.log(selected);



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
            setSelected(getOption)
        }
        console.log(correctAns);

        console.log(getOption)

    }






    return (
        <div className='question-container border border-primary m-5 py-2 text-light  '

            key={question.id}>

            {/* question */}
            <div className='question-icon'>
                <h4 className='question  '>{question.question}</h4>
                <div> <EyeIcon className=" icon text-blue-500" /></div>
            </div>


            {/* options */}
            <div className='option'>



                {

                    question.options.map((option, index) =>

                        // <Option

                        //     option={option}
                        //     key={index}
                        //     question={question}
                        //     correctCount={correctCount}
                        //     setCorrectCount={setCorrectCount}
                        // ></Option>

                        <button className={`option ${classes} `} disabled={selected} onClick={() => handleOption(option)}>{option}</button>
                    )
                }

            </div>




        </div>
    );
};

export default AQuiz;