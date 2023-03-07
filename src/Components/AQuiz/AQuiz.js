// import { EyeIcon } from '@heroicons/react/24/solid';
// import React, { useState } from 'react';
import './AQuiz.css';

// const AQuiz = ({ question, setCorrectCount, correctCount }) => {
//     const [selected, setSelected] = useState('')
//     console.log(selected);



//     const [classes, setClasses] = useState('')


//     console.log(classes);
//     console.log(selected)
//     const correctAns = question.correctAnswer;
//     const handleOption = (getOption) => {
//         setSelected(getOption)
//         if (correctAns === getOption) {

//             setClasses('correct')
//             setCorrectCount(correctCount + 1)
//             return;
//         }
//         else {

//             setClasses('incorrect')
//             setSelected(getOption)
//         }
//         console.log(correctAns);

//         console.log(getOption)

//     }






//     return (
//         <div className='question-container border border-primary m-5 py-2 text-light  '

//             key={question.id}>

//             {/* question */}
//             <div className='question-icon'>
//                 <h4 className='question  '>{question.question}</h4>
//                 <div> <EyeIcon className=" icon text-blue-500" /></div>
//             </div>


//             {/* options */}
//             <div className='option'>



//                 {

//                     question.options.map((option, index) =>

//                         // <Option

//                         //     option={option}
//                         //     key={index}
//                         //     question={question}
//                         //     correctCount={correctCount}
//                         //     setCorrectCount={setCorrectCount}
//                         // ></Option>
//                         <>
//                             <label htmlFor={option}>
//                                 <input type="radio" name="" id={option} />  <button id={option} style={{ backgroundColor: selected === correctAns ? "green" : "" }} disabled={selected} onClick={() => handleOption(option)}>{option}</button>
//                             </label>
//                         </>
//                     )
//                 }

//             </div>




//         </div>
//     );
// };

// export default AQuiz;




// // import React, { useState } from 'react';

// // const QuizQuestion = (props) => {
// //     const { question, options, correctAnswer } = props;
// //     const [selectedOption, setSelectedOption] = useState(null);

// //     const handleOptionSelect = (option) => {
// //         setSelectedOption(option);
// //     };

// //     return (
// //         <div>
// //             {/* <p>{question}</p> */}
// //             {options?.map((option) => (
// //                 <button
// //                     key={option}
// //                     onClick={() => handleOptionSelect(option)}
// //                     style={{
// //                         backgroundColor:
// //                             option === correctAnswer ? 'green' : option === selectedOption ? 'red' : null,
// //                         pointerEvents: selectedOption ? 'none' : 'auto',
// //                     }}
// //                 >
// //                     {option}
// //                 </button>
// //             ))}
// //         </div>
// //     );
// // };

// // export default QuizQuestion;



import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexte/Authprovider';





const AQuiz = ({ question, serial, setAnsweredQuestion, answeredQuestion,
    answered, setAnswered,
    correctAnsCount, setCorrectAnsCount,
    wrongAnsCount, setWrongAnsCount,
}) => {

    // from context
    // const { answered,
    //     setAnswered,
    //     correctAnsCount, setCorrectAnsCount,
    //     wrongAnsCount, setWrongAnsCount,
    //     finalMark, setFinalMark } = useContext(AuthContext)



    const [disabled, setDisabled] = useState(false)


    //
    const correctAnswer = question.correctAnswer;

    const handleOption = (anseredQestion) => {

        setAnsweredQuestion([...answeredQuestion, { question, anseredQestion }])

        setDisabled(true)

        if (anseredQestion) {
            setAnswered(answered + 1)
        }
        if (anseredQestion === correctAnswer) {
            return setCorrectAnsCount(correctAnsCount + 1)
        }
        else if (anseredQestion !== correctAnswer) {
            return setWrongAnsCount(wrongAnsCount + 1)
        }
    }

    return (
        <div className='my-5 '>
            <div className='questions '>
                {serial}.{question.question}
            </div>

            <div className="options-container">
                {
                    question?.options?.map((option, index) =>
                        <div
                            key={index}

                            // onClick={() => setAnsweredOption([...answeredOption, option])}
                            className=' hover:bg-slate-300 md:text-xl lg:text-base rounded'
                        >

                            <input type="radio" name={`question-${serial}`} id={`option-${serial}-${index}`} disabled={disabled ? true : false} onClick={() => { handleOption(option) }} />
                            <label htmlFor={`option-${serial}-${index}`}>{option} </label>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default AQuiz;