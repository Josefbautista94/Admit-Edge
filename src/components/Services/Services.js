import React from "react";
import "./Services.css"; // Ensure this path is correct

const Services = () => {
  return (
    <main className="services-section">
      <h1 className="title">Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Academic Advising</h2>

          <p> 8th grade to 12th grade </p>
          <p> • Identify college goals </p>
          <p> • Strategically select academic schedule</p>
          <p> • Organize extracurricular activities and community service</p>
          <p> • Provide guidance on summer activities.</p>
        </div>
        <div className="service-item">
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
        <div className="service-item">
          <h2>Transfer College Counseling</h2>
          <p>  Current college students seeking to transfer to another institution  </p>
          <p> • Provide college list (if necessary) and offer predictions/advice    </p>
          <p> • Expert guidance to articulate background, achievements, and  interests to support transfer applications </p>
          <p> • Essay coaching</p>
          <p> • Resume coaching</p>
          <p> • Guidance on letters of recommendation</p>
          <p> • Preparation for transfer admission interview</p>
          <p> • Financial aid application advice</p>
        </div>
      </div>
    </main>
  );
};

export default Services;
