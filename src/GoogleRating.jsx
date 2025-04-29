// src/components/GoogleRating.jsx
import React, { useEffect, useState } from 'react';
import './GoogleRating.scss';
const GoogleRating = () => {
  const [ratingData, setRatingData] = useState({ rating: null, reviewCount: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace the URL with your backend endpoint URL if needed.
    fetch('http://localhost:3001/api/google-rating')
      .then((response) => response.json())
      .then((data) => {
        setRatingData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the Google rating:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="google-rating">
      {isLoading ? (
        <span className="loading">Loading rating...</span>
      ) : ratingData.rating ? (
        <>
          <div className="rating-value">{ratingData.rating.toFixed(1)}</div>
          <div className="stars">
            {/* 
                For the stars, you might use icons or Unicode stars.
                This example uses Unicode; you can replace them with react-icons if desired. 
            */}
            ★★★★☆
          </div>
          <div className="review-count">({ratingData.reviewCount} reviews)</div>
        </>
      ) : (
        <span className="error">Rating unavailable</span>
      )}
    </div>
  );
};

export default GoogleRating;
