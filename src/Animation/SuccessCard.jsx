// SuccessCard.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../AnimationStyle/SuccessCard.scss";

const SuccessCard = () => {
  return (
    <div className="success-card">
      <h2>Keys to Success</h2>
      <p>Best way to be success in your life.</p>
      <hr />
      <ul>
        <li><FaCheckCircle className="check-icon" /> Set Clear Goals</li>
        <li><FaCheckCircle className="check-icon" /> Stay Organized</li>
        <li><FaCheckCircle className="check-icon" /> Continuous Learning</li>
        <li><FaCheckCircle className="check-icon" /> Time Management</li>
        <li><FaCheckCircle className="check-icon" /> Maintain a Positive Attitude</li>
      </ul>
      <button className="success-btn">Get Your Success</button>
    </div>
  );
};

export default SuccessCard;
