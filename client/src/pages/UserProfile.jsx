import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar10.jpg";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");

  return (
    <section className="profile">
      <div className="container profile_container">
        
        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={Avatar} alt="" />
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
        </div>
        <Link to={`/myposts/sdfsdf`} className="btn">My Posts</Link>
      </div>
    </section>
  );
};

export default UserProfile;
