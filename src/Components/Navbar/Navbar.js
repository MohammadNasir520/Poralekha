import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg mt-20px">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-success fw-bold" to="/home">Pohalekha</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto ">
            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/statistics">Statistics</NavLink>
            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>

          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;