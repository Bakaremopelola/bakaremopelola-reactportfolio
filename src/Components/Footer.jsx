import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../CSS/Footer.css'

function Footer() {
  let navigate = useNavigate();

  return (
    <div className="Footer">
      <div className="logo">
        
        <img src="/../../src/pictures/Logo.jpg" alt="Logo" />
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
  );
}

export default Footer;
