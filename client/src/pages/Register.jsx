import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
 const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form" onSubmit={handleSubmit}>
          <p className="form_error_message">This is an error message</p>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary">
            Register
          </button>
        </form>
        <small>Already have an Account? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
 );
};

export default Register;
