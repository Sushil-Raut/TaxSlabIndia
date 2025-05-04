import React from 'react';
import '../PolicyStyle/CookiePolicy.scss';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <h1>Cookie Policy</h1>
      <p className="updated">Last Updated: 2025</p>

      <div className="card">
        <h2>Introduction</h2>
        <p>
          This Cookie Policy explains how TaxSlabIndia.com (“we,” “us,” or “our”) uses cookies and similar technologies when you visit our website [www.taxslabindia.com] (the “Website”). This policy should be read in conjunction with our <a href="/privacy-policy">Privacy Policy</a>, which provides more information about how we collect and use personal data.
        </p>
      </div>

      <div className="card">
        <h2>What are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work or to improve their efficiency, as well as to provide information to the website owners.
        </p>
      </div>

      <div className="card">
        <h2>Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the proper functioning of our Website. They enable you to navigate through the Website and use its features.
        </p>

        <h3>Analytical/Performance Cookies</h3>
        <p>
          These cookies allow us to recognize and count the number of visitors and to see how visitors move around our Website when they are using it.
        </p>

        <h3>Functionality Cookies</h3>
        <p>
          These cookies are used to recognize you when you return to our Website. They enable us to personalize our content for you.
        </p>

        <h3>Targeting Cookies</h3>
        <p>
          These cookies record your visit to our Website, the pages you have visited, and the links you have followed.
        </p>

        <h3>Third-Party Cookies</h3>
        <p>
          Please note that third parties may also use cookies over which we have no control.
        </p>
      </div>

      <div className="card">
        <h2>How to Control Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. Most browsers allow you to block cookies, but some functionalities may be affected.
        </p>
      </div>

      <div className="card">
        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Please revisit this page periodically to stay informed.
        </p>
      </div>

      <div className="card">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at <a href="mailto:support@ezmybiz.com">support@ezmybiz.com</a>.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
