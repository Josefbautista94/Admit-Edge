import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainPage.css";

const MainPage = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to fetch reviews.');
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="mainContainer">
      <header className="titleHeader">
        <h1 className="Mtitle">Admit Edge</h1>
        <h2 className="prestige-admissions-consulting">
          Admit Edge Consulting is a premier college admissions company.
          Our mission is to help students' academic development and college admission planning.
        </h2>
      </header>
      <button className="clear-button">About Us</button>

      <div className="review-container">
        <div className="reviews">
          <h2 className="reviewTitle">Reviews</h2>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={review.id || index} className="review">
                <p className="review-author">{review.author_name}</p>
                <p className="review-rating">Rating: {review.rating}</p>
                <p className="review-text">{review.text}</p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
