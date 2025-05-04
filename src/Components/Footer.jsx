import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.scss";
import { FaXTwitter } from "react-icons/fa6";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About TaxSlabIndia</h4>
          <div className="legal-links">
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/trust-center">Trust Center</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <div className="legal-links">
            <Link to="/priviacypolicy">Privacy Policy</Link>
            <Link to="/cookiepolicy">Cookie Policy</Link>
            <Link to="/terms">Conditions and Terms</Link>
            <Link to="/antyterms">Anti-Spam Policy</Link>
          </div>
        </div>

        {/* <div className="footer-section">
          <h4>Resources</h4>
          <div className="legal-links">
            <Link to="/webmail">Webmail</Link>
            <Link to="/whois">WHOIS</Link>
            <Link to="/icann">ICANN Confirmation</Link>
            <Link to="/dev-resources">Designers & Developers</Link>
          </div>
        </div> */}

        {/* <div className="footer-section">
          <h4>Partner Programs</h4>
          <div className="legal-links">
            <Link to="/affiliates">Affiliates</Link>
            <Link to="/resellers">Reseller Programs</Link>
            <Link to="/esmybiz-pro">EsMyBiz Pro</Link>
          </div>
        </div> */}

        <div className="footer-section">
          <h4>Account</h4>
          <div className="legal-links">
            <Link to="/my-products">My Products</Link>
            <Link to="/billing">Renewals & Billing</Link>
            <Link to="/create-account">Create Account</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo-lang-currency">
          <div className="footer-logo">TaxSlabIndia</div>
          <div className="language-select">India - English</div>
          <div className="currency-select">INR ₹</div>
        </div>

        <div className="social-icons">
          <Link
            to="https://www.facebook.com/sushil.chaursiya.5"
            target="_blank"
            className="icon facebook"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://x.com/SushilRautk"
            className="icon twitter"
            target="_blank"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://www.youtube.com/@codewithsushil"
            className="icon youtube"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mcasushil/"
            className="icon linkedin"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://www.instagram.com/er_sushil_chaurasia/?hl=en"
            className="icon instagram"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>

        <div className="footer-legal">
          <p>
            Copyright © 2025 - {new Date().getFullYear()} TaxSlabIndia Operating
            Company, LLC. All Rights Reserved. The TaxSlabIndia logo is a
            registered trademark of TaxSlabIndia Operating Company, LLC in the US
            and other countries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
