import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer-container">
      {/* Left Side: Navigation */}
      <div className="footer-links">
        <a href="#!">Home</a>
        <a href="#!">About</a>
        <a href="#!">Contact</a>
      </div>

      {/* Center: Original Copyright */}
      <div className="footer-copyright">
        <p>© 2025 Agri E-Commerce | Built with ❤️ for Indian Farmers</p>
      </div>

      {/* Right Side: Social Icons (using # as requested) */}
      <div className="footer-socials">
        <a href="#!" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
  
}

export default Footer;
