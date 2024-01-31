import React from "react";
import "./Services.css"; // Ensure this path is correct
import image1 from '../Images/Services1.png'; // Adjust path as necessary
import image2 from '../Images/Services4.png'; // Adjust path as necessary
import image3 from '../Images/Services5.png'; // Adjust path as necessary

const Services = () => {
  return (
    <main className="services-section">
      <h1 className="title">Services</h1>
      <div className="services-list">
        <div className="service-item">
        <img src={image1} className = "students1" alt="students studying" />
        <div className="service-text">
          <h2>Academic Advising</h2>
          <p> 8th grade to 12th grade </p>
          <p> • Identify college goals </p>
          <p> • Strategically select academic schedule</p>
          <p> • Organize extracurricular activities and community service</p>
          <p> • Provide guidance on summer activities.</p>
          </div>
        </div>
        <div className="service-item">
        <img src={image2} className = "students1" alt="students studying" />

        <div className="service-text">

          <h2>College Counseling</h2>
          <p> 11th grade to 12th grade </p>
          <p> • Organize extracurricular activities and community service</p>
          <p> • Provide guidance on summer activities</p>
          <p> • Provide guidance throughout the college application process</p>
          <p> • Provide balanced college list and offer predictions/advice</p>
          <p> • Provide strategic timeline</p>
          <p> • Create standardized testing plan</p>
          <p> • Essay coaching</p>
          <p> • Resume coaching</p>
          <p> • Financial aid application advice</p>
          <p> • Scholarship application advice</p>
          </div>

        </div>
        <div className="service-item">
        <img src={image3} className = "students1" alt="students studying" />

        <div className="service-text">

          <h2>Transfer College Counseling</h2>
          <p>
            {" "}
            Current college students seeking to transfer to another institution{" "}
          </p>
          <p>
            {" "}
            • Provide college list (if necessary) and offer predictions/advice{" "}
          </p>
          <p>
            {" "}
            • Expert guidance to articulate background, achievements, and
            interests to support transfer applications{" "}
          </p>
          <p> • Essay coaching</p>
          <p> • Resume coaching</p>
          <p> • Guidance on letters of recommendation</p>
          <p> • Preparation for transfer admission interview</p>
          <p> • Financial aid application advice</p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Services;
