import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo">
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav_menu">
          <li>
            <Link to="/profile/sdfsdf">Tushar_Sharma</Link>
          </li>
          <li>
            <Link to="/create">Create_Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav_toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
