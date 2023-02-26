import React, { useState } from 'react';
import { addQuestion, postVocabulary } from '../api/AddQuestinApi';

const AddQuestion = () => {
    const [questions, setQuestions] = useState([])
    // const [correctAnswer, setCorrectAnswer] = useState("")
    // console.log(correctAnswer)

    const handleSubmit = event => {
        event.preventDefault()
        const question = event.target.question.value;
        const option1 = event.target.option1.value;
        const option2 = event.target.option2.value;
        const option3 = event.target.option3.value;
        const option4 = event.target.option4.value;
        const correctAnswer1 = event.target.check1.checked
        const correctAnswer2 = event.target.check2.checked
        const correctAnswer3 = event.target.check3.checked
        const correctAnswer4 = event.target.check4.checked

        const topic = event.target.topic.value;

        let correctAnswer;
        if (correctAnswer1 === true) {
            correctAnswer = option1

        }
        if (correctAnswer2 === true) {
            correctAnswer = option2

        }
        if (correctAnswer3 === true) {
            correctAnswer = option3

        }
        if (correctAnswer4 === true) {
            correctAnswer = option4

        }
        console.log(correctAnswer)

        const options = [option1, option2, option3, option4]

        const questions = {
            question,
            options,
            correctAnswer,
            topic
        }
        console.log(questions);

        if (!questions.correctAnswer) {
            return alert("please choose correct Answer")
        }
        // if (correctAnswer1 === true || correctAnswer2 === true || correctAnswer3 === true || correctAnswer4 === true) {
        //     return alert("you can't select more than on correct Answer")
        // }
        if (questions.correctAnswer) {
            // save questions
            addQuestion(questions)
                .then(data => {
                    console.log(data);
                    event.target.reset()
                })
                .catch(error => {
                    console.log(error)
                })
        }


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>


                <select name='topic'>
                    <option>English</option>
                    <option>vocabulary</option>
                    <option>BCS</option>
                </select>

                <p>  Question</p>
                <input type="text" name="question" id="" required />

                <p>option1</p>
                <input type="checkbox" name="check1" id="1" />
                <input type="text" name="option1" id="1" required />

                <p>option2</p>
                <input type="checkbox" name="check2" id="2" />
                <input type="text" name="option2" id="2" required />

                <p>option3</p>
                <input type="checkbox" name="check3" id="3" />
                <input type="text" name="option3" id="3" required />

                <p>option4</p>
                <input type="checkbox" name="check4" id="4"  ></input>
                <input type="text" name="option4" id="4" required />

                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddQuestion;