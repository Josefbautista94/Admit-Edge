import React from "react";
import "./NavBar.css"; // Ensure this path is correct
import logo from "../Images/logo.jpeg";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
      <div className="nav-logo">
        <a href="#">
          <span className = "ae">Admit</span>
          <span className = "ae">Edge</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
        <Link to="/Home">Home</Link>
          <div className="sub-navbar">
           
            <a href="#">Reviews</a>
            {/* ... more links ... */}
          </div>
        </li>

        <li>
        <Link to="/Services">Services</Link>

          {/* Sub-navbar is now a sibling to the link, not a child */}
          <div className="sub-navbar">
            <a href="#">Academic Advising</a>
            <a href="#">College Counseling</a>
            <a href="#">Transfer College Counseling</a>

            {/* ... more links ... */}
          </div>
        </li>
        <li>
        <Link to="/College-Acceptances">College Acceptances</Link>
          <div className="sub-navbar">
            <a href="#">Top Ranked Colleges</a>
            <a href="#">Undergraduate Business Schools</a>
            <a href="#">Complete List
</a>
            {/* ... more links ... */}
          </div>
        </li>
        <li>
        <Link to="/About">About</Link>
          <div className="sub-navbar">
            <a href="#">Sub Link 1</a>
            <a href="#">Sub Link 2</a>
            {/* ... more links ... */}
          </div>
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
          <div className="sub-navbar">
            <a href="#">Sub Link 1</a>
            <a href="#">Sub Link 2</a>
            {/* ... more links ... */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
