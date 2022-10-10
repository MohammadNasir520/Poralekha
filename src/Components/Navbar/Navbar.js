import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to={'/home'}>Home</Link>
      <Link to={'statistics'}>Statistics</Link>
      <Link to={'/blogs'}>Blogs</Link>
      {/* <Link to={}></Link> */}
    </div>
  );
};

export default Navbar;
