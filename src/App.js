import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Quiz from './Components/Quiz/Quiz';
import Static from './Components/Statistic/Static';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  const router=createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          loader: ()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path: '/home',
          loader: ()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/statistics',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Static></Static>
        },
        {
          path:'/quiz/:quizId',
          loader: ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>
        }
       
       
      ]
   

    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
