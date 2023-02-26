import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Quiz from './Components/Quiz/Quiz';
import Static from './Components/Statistic/Static';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Result from './Pages/Result/Result';
import AddQuestion from './Pages/AddQuestion';
import CorrectAnswer from './Pages/CorrectAnswer/CorrectAnswer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Static></Static>
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/questions/${params.quizId}`)
            // return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/result',
          element: <Result></Result>
        },
        {
          path: '/addQuestions',
          element: <AddQuestion />
        },
        {
          path: '/coorrectAnswer/:id',
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/questions/${params.id}`)
            // return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <CorrectAnswer />
        },


      ]


    }

  ])
  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
