import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
 const navigate = useNavigate();

 const goBack = () => {
    navigate(-1); // Navigate one step back in the history stack
 };

 return (
    <section className='error_page'>
      <div className="center">
        <Link onClick={goBack} className='btn primary'>Go Back!</Link>
        <h1>Page Not Found!!</h1>
      </div>
    </section>
 );
};

export default ErrorPage;
