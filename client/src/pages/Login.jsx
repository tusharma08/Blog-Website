import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
 const [userData, setUserData] = useState({
    email: "",
    password: ""
 });

 const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
 };

 const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here you can add your logic to handle the form submission,
    // such as validation or sending the data to a server
    console.log(userData); // For demonstration purposes, logging the user data
 };

 return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login_form" onSubmit={handleSubmit}>
          <p className="form_error_message">This is an error message</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>Don't have an Account Yet? <Link to="/register">Register</Link></small>
      </div>
    </section>
 );
};

export default Login;
