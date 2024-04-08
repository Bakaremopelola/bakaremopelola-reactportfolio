import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className='logo'>
        <img src='../../src/pictures/Pink Brown Colorful Retro Aesthetic Photography Name Logo.jpg'/>

      </div>

      <div className='nav'>
      <li className="HOME">
          <Link to="/" className="home">HOME</Link>
        </li>
        <li className="ABOUT">
          <Link to="/about" className="about">ABOUT</Link>
        </li>
        <li className="PORTFOLIO">
          <Link to="/portfolio" className="portfolio">PORTFOLIO</Link>
        </li>
        <li className="CONTACT">
          <Link to="/Contacts" className="contact">CONTACT</Link>
        </li>
        <li className="EXPERIENCE">
          <Link to="/experience" className="experience">EXPERIENCE</Link>
        </li>
        <li className="SERVICE">
          <Link to="/services" className="services">SERVICES</Link>
        </li>  
        </div>

        <div className='btn1'>
          <button>Let's talk</button>

        </div>
      

    </nav>
  );
};

export default NavBar;
