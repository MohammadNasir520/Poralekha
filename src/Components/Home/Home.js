import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizCard from "../QuizCard/QuizCard";
import './Home.css'

const Home = () => {
    const quizs=useLoaderData();
    console.log(quizs)
  return (
    <div className=" quizs">
     {
        quizs.data.map(quiz=><QuizCard
             quiz={quiz}
             key={quiz.id}
             ></QuizCard>)
     }
    </div>
  );
};

export default Home;
