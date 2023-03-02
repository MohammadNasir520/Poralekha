import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import './Home.css'
import Header from "../Header/Header"

const Home = () => {
  // const quizs = useLoaderData();

  const [quizes, setQuizes] = useState([])
  console.log(quizes)

  useEffect(() => {
    fetch("quizes.json")
      .then(res => res.json())
      .then(data => {
        setQuizes(data)
      })

  }, [])

  return (

    <div>
      <div className="header">
        <Header></Header>
      </div>

      <div className=" quizs">

        {
          // quizs.data.map(quiz => <QuizCard
          quizes.map(quiz => <QuizCard
            quiz={quiz}
            key={quiz.id}
          ></QuizCard>)

        }

      </div>
    </div>
  );
};

export default Home;
