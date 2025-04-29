import React from "react";
// import "./CompanyRegistration.scss";
import { Link } from "react-router-dom";
import "../ServicesStyle/CompanyRegistration.scss";
import { FaCheckCircle, FaShieldAlt, FaUsers, FaBuilding, FaRegSmile, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    title: "Finalize Company Name",
    description: "Finalize Company Name, Obtain DSC and DIN for Directors.",
    icon: <FaCheckCircle />
  },
  {
    title: "Apply Online Company Registration",
    description: "File Registration Application with the Ministry of Corporate Affairs (MCA).",
    icon: <FaShieldAlt />
  },
  {
    title: "Get Company Registration Certificate",
    description: "Obtain Certificate of Incorporation for your New Company.",
    icon: <FaRegSmile />
  }
];

const benefits = [
  {
    title: "Limited Liability Protection",
    description: "Safeguard personal assets from business liabilities and enjoy tax benefits.",
    icon: <FaShieldAlt />
  },
  {
    title: "Better Image and Credibility",
    description: "Gain customer trust and market presence with proper registration.",
    icon: <FaUsers />
  },
  {
    title: "Easy to Raise Funds and Loans",
    description: "Registration makes it easier to get loans and attract investors.",
    icon: <FaMoneyBillWave />
  },
  {
    title: "Favorite for Investors",
    description: "Preferred structure for investors due to its transparency and legal benefits.",
    icon: <FaBuilding />
  },
  {
    title: "Easy to Attract Employees",
    description: "Registered companies draw better talent and offer job security.",
    icon: <FaUsers />
  },
  {
    title: "Easy to Sell with Accounting",
    description: "Registered companies can be sold or transferred with less hassle.",
    icon: <FaCheckCircle />
  }
];

const CompanyRegistration = () => {
  return (
    <div className="company-registration">
      <header className="hero">
        <h1>Company Registration Made Simple</h1>
        <p>Your journey to business success starts with us.</p>
      </header>

      <section className="steps">
        <h2>Easy Steps to Use</h2>
        <div className="step-cards">
          {steps.map((step, index) => (
            <div key={index} className="card">
              <span className="icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits">
        <h2>Why Register a Private Limited Company?</h2>
        <div className="benefit-cards">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <span className="icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>We value your data and provide end-to-end expert support.</p>
        <Link to="/contact">
        <button >Register Now</button>
        </Link>
      </section>
    </div>
  );
};

export default CompanyRegistration;
