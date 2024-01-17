import React from "react";
import "./Services.css"; // Ensure this path is correct

const Services = () => {
    return (
        <main className="services-section">
            <h1>Our Services</h1>
            <div className="services-list">
                <div className="service-item">
                    <h2>Academic Advising</h2>
                    <p>Description of Academic Advising service...</p>
                </div>
                <div className="service-item">
                    <h2>College Counseling</h2>
                    <p>Description of College Counseling service...</p>
                </div>
                {/* More services can be added here */}
                <div className="service-item">
                    <h2>Transfer College Counseling
</h2>
                    <p>Description of College Counseling service...</p>
                </div>
            </div>
        </main>
    );
};

export default Services;