import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'statistics'}>Statistics</NavLink>
      <NavLink to={'/blogs'}>Blogs</NavLink>
      {/* <NavLink to={}></NavLink> */}
    </div>
  );
};

export default Navbar;
