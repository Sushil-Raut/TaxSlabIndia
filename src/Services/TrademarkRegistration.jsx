import React from "react";
import "../ServicesStyle/TrademarkRegistration.scss";

const TrademarkRegistration = () => {
  return (
    <div className="trademark-container">
      <h1>Trademark Registration</h1>

      <section className="form-trademark-wrapper">
        <div className="form-section">
          <h2>Now Fill Your Details</h2>
          <form>
            <input type="text" placeholder="Your name / (नाम) *" />
            <input type="tel" placeholder="Mobile Number / (मोबाइल नंबर) *" />
            <input type="email" placeholder="Email ID / (ईमेल) *" />
            <input type="text" placeholder="Address / (पता) *" />
            <button type="submit">Next</button>
          </form>
        </div>

        <div className="why-trademark">
          <h2>Why Trademark Registration</h2>
          <ul>
            <li>Authorized by Income Tax Department - ERI</li>
            <li>Registered with Startup India scheme</li>
            <li>Supported by iStart (Govt. of Rajasthan)</li>
            <li>Promotes Digital India initiative</li>
            <li>Assistance in e-Verification</li>
            <li>Protects your brand's identity</li>
            <li>Builds customer trust and loyalty</li>
          </ul>
        </div>
      </section>

      <section className="pricing-docs">
        <div className="pricing">
          <h2>Pricing Summary</h2>
          <p>
            <strong>PayrollNexus Fee:</strong> Rs. 3900/-
          </p>
          <p>
            <strong>Complete By:</strong> 20-Apr-2025
          </p>
        </div>
        <div className="documents">
          <h2>Documents Required</h2>
          <ul>
            <li>Incorporation Certificate</li>
            <li>Partnership Deed</li>
            <li>PAN Card</li>
          </ul>
        </div>
      </section>

      <section className="steps">
        <h2>Trademark Registration with PayrollNexus</h2>
        <div className="step-card">
          <h3>1. Fill Form</h3>
          <p>Fill the form, make payment and get started</p>
        </div>
        <div className="step-card">
          <h3>2. Call to Discuss</h3>
          <p>Our expert will prepare your documents</p>
        </div>
        <div className="step-card">
          <h3>3. Get Trademark</h3>
          <p>We’ll file your application and deliver your certificate</p>
        </div>
      </section>

      <section className="advantages">
        <h2>Advantages of Trademark Registration</h2>
        <ul>
          <li>Exclusive right to use the brand name</li>
          <li>Legal protection</li>
          <li>Differentiate your product</li>
          <li>Creates brand asset</li>
          <li>Enable global registration</li>
          <li>Builds trust & goodwill</li>
        </ul>
      </section>

      <section className="intro">
        <h2>Introduction to Trademark Registration</h2>
        <p>
          Trademark registration helps protect intellectual property, brand
          identity, and offers exclusive rights to use the mark, preventing
          misuse.
        </p>
      </section>

      <section className="registration-types">
        <h2>What Can You Register as a Trademark?</h2>
        <ul>
          <li>Name (Signature or personal name)</li>
          <li>Word (e.g., Google)</li>
          <li>Number (Alphanumeric combinations)</li>
          <li>Image (Symbols, shapes, logos)</li>
          <li>Sound (Audio marks like jingles)</li>
        </ul>
      </section>

      <section className="classes">
        <h2>Trademark Classes</h2>
        <p>Trademark protection is categorized into 45 classes:</p>
        <ul>
          <li>Class 9 – Software & Electronics</li>
          <li>Class 25 – Clothing</li>
          <li>Class 35 – Business & Advertising</li>
          <li>Class 41 – Education & Entertainment</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs</h2>
        <ul>
          <li>What are well-known trademarks?</li>
          <li>Why register a trademark online?</li>
          <li>Can two companies own the same trademark?</li>
          <li>What is the validity period?</li>
          <li>What are the 4 types of trademarks?</li>
        </ul>
      </section>

      <div className="cta">
        <h2>Ready to Get Started?</h2>
        <p>
          We value your data as if it were our own. Join PayrollNexus today for
          secure and reliable trademark services.
        </p>
      </div>
    </div>
  );
};

export default TrademarkRegistration;
