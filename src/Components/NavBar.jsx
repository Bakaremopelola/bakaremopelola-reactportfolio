import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css'
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


const NavBar = () => {
  let navigate = useNavigate()
  return (
    <nav className="NavBar">
      <div className='logo'>
        
        <img src='../src/pictures/Pink Brown Colorful Retro Aesthetic Photography Name Logo.jpg'/>

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
        {/* <li className="SERVICE"> */}
          {/* <Link to="services" className="services">SERVICES</Link> */}
        {/* </li>   */}
         
        </div>

        <div className='btn2'>
        <button onClick={()=>navigate("/Contacts")} className='btn2'>Let's Talk</button>

        </div>

        <div className="Footer">
      <div className="logo">
        
        <img src="../../src/pictures/Pink Brown Colorful Retro Aesthetic Photography Name Logo.jpg" alt="Logo" />
      </div>

      <div className="footer-text">
        <h3>2024-Bakaremopelola, All rights reserved</h3>
      </div>

      <div className="footer-btn">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <button><FaFacebook /> Facebook</button>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <button><FaLinkedin /> LinkedIn</button>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <button><FaTwitter /> Twitter</button>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <button><FaGithub /> GitHub</button>
        </a>
      </div>
    </div>
  
      

    </nav>
  );
};

export default NavBar;
