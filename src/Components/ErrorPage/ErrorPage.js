import React from 'react';
import { Link } from 'react-router-dom';
import "./ErrorPage.css"

const ErrorPage = () => {
    return (
      <div className='wrong-container'>
          
           <div>
           <h1 className='text-danger'>Upps ! <br /> Something Went Wrong</h1>
            <h6> Back to <Link to='/home'>Home</Link></h6>
           </div>
       
      </div>
    );
};

export default ErrorPage;