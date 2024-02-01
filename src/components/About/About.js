import React from "react";
import "./About.css"; // Make sure the path is correct

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          Welcome to [Your Company Name], where we specialize in [briefly describe services or products]. Founded in [Year], our mission has always been [Mission Statement].
        </p>
        <p>
          Our team consists of [describe team and experience briefly]. We believe in [company values and beliefs].
        </p>
        <p>
          [Additional information about company history, achievements, goals, etc.]
        </p>
      </div>
      <div className="about-image">
        <img src="" alt="About Us" />
      </div>
    </div>
  );
};

export default About;