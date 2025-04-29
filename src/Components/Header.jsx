import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import "../Styles/Header.scss";
// import PrivacyPolicy from "../Policy/PrivacyPolicy";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      {/* Top Header */}
      <div className="UpperHeader">
        <div className="container">
          <div className="contact-left">
            <div className="contact-item">
              <FaWhatsapp className="icon" />
              <a
                href="https://wa.me/919959081770"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91-9959081770
              </a>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <a href="mailto:support@EsMyBiz.com">support@EsMyBiz.com</a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <a href="tel:+919959081770">+91-9959081770</a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-header desktop-nav">
        <div className="logo">TaxSlabIndia</div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <div className="dropdown">
            <span className="dropbtn">Services ▾</span>
            <div className="dropdown-content">
              <Link to="/accounting" onClick={() => setMenuOpen(false)}>
                Accounting Services
              </Link>
              <Link to="/itrfiling" onClick={() => setMenuOpen(false)}>
                ITR Filing
              </Link>
              <Link to="/gstregistration" onClick={() => setMenuOpen(false)}>
                GST Registration
              </Link>
              <Link to="/gstreturn" onClick={() => setMenuOpen(false)}>
                GST Return
              </Link>
              <Link
                to="/companyregistration"
                onClick={() => setMenuOpen(false)}
              >
                Company Registration
              </Link>
              <Link to="/trademark" onClick={() => setMenuOpen(false)}>
                TradeMark Registration
              </Link>
              <Link to="/payrolloutsorcing" onClick={() => setMenuOpen(false)}>
                Payroll Outsourcing
              </Link>
            </div>
          </div>

          <Link to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="logo">PayrollNexus</div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </Link>
        <div className="mobile-dropdown">
          <span>SERVICES</span>
          <div className="mobile-dropdown-content">
            <Link to="/itrfiling" onClick={() => setMenuOpen(false)}>
              ITR Filing
            </Link>
            <Link to="/gstregistration" onClick={() => setMenuOpen(false)}>
              GST Registration
            </Link>
            <Link to="/gstreturn" onClick={() => setMenuOpen(false)}>
              GST Return
            </Link>
            <Link to="/companyregistration" onClick={() => setMenuOpen(false)}>
              Company Registration
            </Link>
            <Link to="/trademark" onClick={() => setMenuOpen(false)}>
              TradeMark Registration
            </Link>
            <Link to="/payrolloutsorcing" onClick={() => setMenuOpen(false)}>
              Payroll OutSorcing
            </Link>
            <Link to="/accounting" onClick={() => setMenuOpen(false)}>
              Accounting Services
            </Link>
          </div>
        </div>
        <Link to="/blogs" onClick={() => setMenuOpen(false)}>
          BLOGS
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT US
        </Link>
        <Link to="/priviacypolicy" onClick={() => setMenuOpen(false)}></Link>
      </nav>
    </header>
  );
};

export default Header;
