import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="nav-bar d-flex justify-content-between align-items-center  p-4 ">
     <div>
<h1 className="text-success">Poralekha</h1>
     </div>
     <div className="">
     <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'statistics'}>Statistics</NavLink>
      <NavLink to={'/blogs'}>Blogs</NavLink>
     </div>
      {/* <NavLink to={}></NavLink> */}
    </nav>
  );
};

export default Navbar;
