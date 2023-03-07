import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (

    // <nav className="navbar navbar-expand-lg bg mt-20px">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand text-success fw-bold" to="/home">Pohalekha</NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav mx-auto ">
    //         <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
    //         <NavLink className="nav-link" to="/statistics">Statistics</NavLink>
    //         <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
    //         <NavLink className="nav-link" to="/addQuestions">addQuestion</NavLink>

    //       </div>
    //     </div>
    //   </div>
    // </nav>


    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold">Poralekha</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink className="mr-5 hover:text-gray-900" to="/home">Home</NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to="/statistics">Statistics</NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to="/blogs">Blogs</NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to="/addQuestions">addQuestion</NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">SignIn
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>

  );
};

export default Navbar;