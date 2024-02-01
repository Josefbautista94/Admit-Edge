import React from "react";
import "./About.css"; // Make sure the path is correct
import Gabi from "../Images/Gabi.webp";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <img src={Gabi} className ="GabiIcon" alt="About Us" />

      <div className="about-content">
        <p>
         
Gabriela McLeod has over a decade of experience guiding talented students to gain admission to the top undergraduate institutions in the country.
        </p>
        <p>
        She started her career at The Posse Foundation where she assisted in carefully selecting and training small, diverse groups of talented students - a posse - for admission and full-tuition scholarships to Boston University, Texas A&M, Syracuse University, Brandeis, Bard College and the College of Wooster.        </p>
        <p>
        Later, she went on to serve as a key member of the admissions team at the University of Miami where she oversaw three of the largest recruiting markets for the institution; in addition to reading, reviewing and making decisions on over 10,000 applications per academic year. This experience has given her extensive knowledge of what goes into a successful application, how to best present yourself during an official college interview and how to strategize effectively for each college application. 
        </p>
        <p>
        After her time in admission, she transitioned to the other side of the desk, as a College Counselor at one of the top independent schools in South Florida, Gulliver Preparatory. At Gulliver, she has worked with students one-on-one to craft personalized, strategic and successful applications. Gabriela provides consistent and strategic academic counseling throughout students' four-year high school careers to ensure that they are competitive college applicants. Her keen attention to detail has aided her students in securing admission at their top schools of choice        </p>
        <p>
        Based on these experiences, Gabriela has a comprehensive understanding of the college admissions selection process and how to assemble an application that gets the right attention. ​She breaks down the college admissions process into steps that are manageable for students and their families, while also providing expert guidance, methodology, advice and structure throughout the entire college application process.        </p>
        <p>
        Gabriela graduated from the University of Central Florida with a Bachelors degree in Political Science and from Saint John's University with a Masters degree in Government and Politics. She is currently pursuing a Doctorate degree in Higher Ed. Administration at the University of Miami with an anticipated graduation date in the Summer of 2022.         </p>
      </div>
      <div className="about-image">
      </div>
    </div>
  );
};

export default About;