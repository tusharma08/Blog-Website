import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    
    <nav>
      <div className="container nav_container"></div>
      <Link to="/" className='nav_logo'>
        <img src={Logo} alt="Navbar Logo" />
      </Link>
      <ul className="nav_menu">
        <li><Link to="/profile">Tushar Sharma</Link></li>
        <li><Link to="/create">Create Post</Link></li>
        <li><Link to="/authors">Authors</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
      <button className='nav__toggle-btn'>
        <AiOutlineClose />
      </button>
    </nav>
  )
}

export default Header