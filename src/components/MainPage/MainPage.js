import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
    <div className="mainContainer">
      <header className="titleHeader">
        <h1 className="title">Admit Edge</h1>
        <h2 className="prestige-admissions-consulting">
          Admit Edge Consulting is a premier college admissions company.
          Our mission is to help students' academic development and college admission planning.
        </h2>
      </header>
      <a href="#" className="clear-button">About Us</a>
    </div>

    <div className="review-container">
      <div className="reviews">
        <h2 className="reviewTitle">Reviews</h2>
        {/* Reviews content goes here */}
      </div>
    </div>
  </>
);
};


export default MainPage;
