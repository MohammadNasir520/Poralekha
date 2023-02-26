import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";
import './Home.css'
import Header from "../Header/Header"

const Home = () => {
    const quizs=useLoaderData();
    console.log(quizs)
  return (

    <div>
   <div className="header">
        <Header></Header>
      </div>

    <div className=" quizs">
    
     {
        quizs.data.map(quiz=><QuizCard
             quiz={quiz}
             key={quiz.id}
             ></QuizCard>)

     }
     
    </div>
    </div>
  );
};

export default Home;
