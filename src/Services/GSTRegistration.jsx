import React from 'react';
import '../ServicesStyle/GSTRegistration.scss';
import { Link } from 'react-router-dom';



const GSTRegistration = () => {
  return (
    <div className="gst-registration">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>GST Registration Made Easy</h1>
        <p>Your Business, Our Priority – Get Registered Fast & Stay Compliant</p>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="section">
        <h2>Documents Required</h2>
        <div className="card-grid">
          <div className="info-card">
            <h4>Proprietorship</h4>
            <p>PAN, Aadhaar, Photo, Address proof, Business proof, Bank details</p>
          </div>
          <div className="info-card">
            <h4>Partnership / LLP</h4>
            <p>Firm PAN, Deed, Address & ID of partners, Proof of business, Bank details</p>
          </div>
          <div className="info-card">
            <h4>Private Ltd / OPC</h4>
            <p>PAN, COI, MoA, AoA, Directors’ KYC, Business & Bank proof</p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section light">
        <h2>Why Register for GST?</h2>
        <div className="card-grid">
          <div className="info-card">
            <h4>Legally Compliant</h4>
            <p>Mandatory for businesses above ₹20/40 lakh turnover</p>
          </div>
          <div className="info-card">
            <h4>Input Tax Credit</h4>
            <p>Save more by claiming credit on purchases</p>
          </div>
          <div className="info-card">
            <h4>Expand Business</h4>
            <p>Sell across India & on eCommerce platforms</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h4>Step 1</h4>
            <p>Upload Documents</p>
          </div>
          <div className="step">
            <h4>Step 2</h4>
            <p>We File Your Application</p>
          </div>
          <div className="step">
            <h4>Step 3</h4>
            <p>Get GSTIN in 5-7 Days</p>
          </div>
        </div>
      </section>

      {/* TYPES OF REGISTRATION */}
      <section className="section light">
        <h2>Types of GST Registration</h2>
        <div className="card-grid">
          <div className="info-card">
            <h4>Regular</h4>
            <p>For businesses above threshold limits</p>
          </div>
          <div className="info-card">
            <h4>Composition</h4>
            <p>Pay tax at a fixed rate – For small businesses</p>
          </div>
          <div className="info-card">
            <h4>Casual/Non-Resident</h4>
            <p>Temporary or occasional business in India</p>
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section className="section">
        <h2>Who Should Apply?</h2>
        <ul className="list">
          <li>Turnover exceeds ₹20/40 lakhs</li>
          <li>Sellers on Amazon/Flipkart</li>
          <li>Inter-state service or goods suppliers</li>
          <li>Input Service Distributors</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="section light">
        <h2>FAQs</h2>
        <div className="faq-section">
          <details>
            <summary>Is GST required for online selling?</summary>
            <p>Yes, mandatory for all online sellers.</p>
          </details>
          <details>
            <summary>How many days to get GST?</summary>
            <p>Usually within 5-7 working days.</p>
          </details>
          <details>
            <summary>Can I apply voluntarily?</summary>
            <p>Yes, to avail ITC and grow business.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="highlight">
        <h3>Let’s Register Your GST Now</h3>
        <p>Get started with our expert-led services and receive your GSTIN hassle-free.</p>
        
        <Link to="/contact">
        <button className="btn">Get Started</button>
</Link>
      </section>
    </div>
  );
};

export default GSTRegistration;
