import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar10.jpg";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
 const [avatar, setAvatar] = useState(Avatar);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [currentPassword, setCurrentPassword] = useState('');
 const [newPassword, setNewPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here you can add your logic to handle the form submission,
    // such as validation or sending the data to a server
    console.log({ name, email, currentPassword, newPassword, confirmPassword }); // For demonstration purposes, logging the form data
 };

 return (
    <section className="profile">
      <div className="container profile_container">
        
        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="" />
            </div>
            <form className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="png, jpg, jpeg"
              />
              <label htmlFor="avatar"><MdModeEdit /></label>
            </form>
            <button className="profile_avatar_btn"><FaCheck /></button>
          </div>
          <h1>Tushar Sharma</h1>
          <Link to={`/mypost/sdfsdf`} className="btn">My Posts</Link>

          <form onSubmit={handleSubmit} className="form profile_form">
            <p className="form_error_message">This is ERROR Message!</p>
            <input type="text" placeholder="Full Name"name="name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <button type="submit" className="btn primary">Update Details</button>
          </form>
        </div>     
      </div>
    </section>
 );
};

export default UserProfile;
