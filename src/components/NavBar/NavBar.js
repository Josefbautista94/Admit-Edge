import React from 'react';
import './NavBar.css'; // Ensure this path is correct
import logo from '../Images/logo.jpeg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
      <div className="nav-logo">
        <a href="#">
          <span>Admit</span>
          <span>Edge</span>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Services</a>
          {/* Sub-navbar is now a sibling to the link, not a child */}
          <div className="sub-navbar">
            <a href="#">Sub Link 1</a>
            <a href="#">Sub Link 2</a>
            {/* ... more links ... */}
          </div>
        </li>
        <li><a href="#">College Acceptances</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;