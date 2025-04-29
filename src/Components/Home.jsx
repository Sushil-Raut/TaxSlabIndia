import "../Styles/Home.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import slide1 from "../Assets/slide1.jpg";
import slide2 from "../Assets/slide2.jpg";
import slide3 from "../Assets/slide3.jpg";
import slide4 from "../Assets/slide4.jpg";
import slide5 from "../Assets/slide5.jpg";

const Home = () => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getSlideContent = (index) => {
    switch (index) {
      case 0:
        return {
          headline: "📊 Your One-Stop Hub for Tax & Compliance Services",
          subtext:
            "From ITR filing to GST and payroll outsourcing — we handle it all with precision and care.",
          buttonText: "Explore Our Services",
          buttonLink: "/contact",
        };
      case 1:
        return {
          headline: "🧾 Hassle-Free ITR Filing — Starting at ₹899",
          subtext:
            "Fast, secure, and accurate income tax return filing for individuals and businesses.",
          buttonText: "File ITR Now",
          buttonLink: "/contact",
        };
      case 2:
        return {
          headline: "📅 Stay Compliant with Monthly GST Filing",
          subtext:
            "Never miss a deadline again. We manage your GST filings, returns, and reconciliation.",
          buttonText: "Get GST Support",
          buttonLink: "/contact",
        };
      case 3:
        return {
          headline: "👥 Outsource Payroll & Focus on Growth",
          subtext:
            "We manage salaries, compliance, and payroll taxes — so you can manage your team better.",
          buttonText: "Talk to Payroll Experts",
          buttonLink: "/contact",
        };
      case 4:
        return {
          headline: "🏢 Start Your Business with Confidence",
          subtext:
            "Private Limited, LLP, OPC, or MSME? We register it all with expert guidance and affordable pricing.",
          buttonText: "Register Your Company",
          buttonLink: "/contact",
        };
      default:
        return {};
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="auto-carousel">
        <div className="carousel-wrapper">
          {images.map((image, index) => {
            const content = getSlideContent(index);
            return (
              <div
                className={`carousel-slide ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
              >
                {index === currentIndex && (
                  <div className="carousel-content-wrapper">
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="carousel-img"
                    />
                    <div className="carousel-text-overlay">
                      <h2>{content.headline}</h2>
                      <p>{content.subtext}</p>

                      <Link to={content.buttonLink} className="cta-button">
                        {content.buttonText}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active-dot" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {[
            [
              "Income Tax Return Filing",
              "📄",
              "Hassle-free ITR filing for individuals & businesses",
              "/itrfiling",
            ],
            [
              "GST Registration",
              "💼",
              "Get GSTIN for your business in 3 easy steps",
              "/gstregistration",
            ],
            [
              "GST Return Filing",
              "📊",
              "Monthly, Quarterly & Annual GST Filing",
              "/gstreturn",
            ],
            [
              "Digital Signature Certificate",
              "🔏",
              "Secure documents with Class 2 & 3 DSCs",
              "/digital-signature",
            ],
            [
              "Company Registration",
              "🏢",
              "Register your Pvt Ltd, LLP or OPC easily",
              "/companyregistration",
            ],
            [
              "Trademark Registration",
              "🧾",
              "Protect your brand with TM registration",
              "/trademark",
            ],
            [
              "Udyam (MSME) Registration",
              "🏭",
              "Get Udyam Certificate & benefits",
              "/udyam-registration",
            ],
            [
              "Accounting Services",
              "📚",
              "End-to-end bookkeeping & compliance",
              "/accounting",
            ],
          ].map(([title, icon, desc, link], index) => (
            <div key={index} className="service-card">
              <Link to={link} className="service-card-link">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <h2>Why Choose Us</h2>
        <div className="reasons-grid">
          <div className="reason-card">⚡ Fast Service</div>
          <div className="reason-card">🧑‍💼 Expert Support</div>
          <div className="reason-card">💰 Affordable Pricing</div>
          <div className="reason-card">🔒 Secure & Confidential</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">1. Choose Your Service</div>
          <div className="step-card">2. Submit Documents</div>
          <div className="step-card">3. Get Expert Support</div>
          <div className="step-card">4. Receive Certificate or Filing</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h3>Still have questions?</h3>
        <Link to="/contact" className="btn primary">
          Contact Our Experts
        </Link>
      </section>
    </div>
  );
};

export default Home;
