import React from "react";
import "../ServicesStyle/Accounting.scss";

import bgImage from "../Assets/business.jpg";
import woman1 from "../Assets/woman1.jpg";

import calculate from "../Assets/calculate.jpg";

const Accounting = () => {
  const data = [
    {
      title: "Industry Expertise",
      content:
        "Our deep industry knowledge allows us to deliver accounting and bookkeeping services tailored to your specific business needs. We understand the complexities of different industries and address them with precision.",
      color: "black",
    },
    {
      title: "Skilled Accounting Professionals",
      content:
        "Our team comprises highly trained and experienced accountants with a strong grasp of financial principles, ensuring accuracy and compliance in every service we provide.",
      color: "red",
    },
    {
      title: "Tailored Financial Solutions",
      content:
        "We offer personalized accounting and bookkeeping services, including online accounting, online bookkeeping, and outsourced financial support—all aligned with your business goals.",
      color: "blue",
    },
    {
      title: "Fast & Reliable Turnaround",
      content:
        "We value your time. Our efficient processes ensure swift delivery of accounting services, helping you stay informed and make timely decisions.",
      color: "blue",
    },
    {
      title: "Cost-Effective Services",
      content:
        "High-quality accounting support doesn’t have to be expensive. Our competitive pricing ensures that you receive exceptional value without compromising service quality.",
      color: "black",
    },
    {
      title: "Proactive Financial Insights",
      content:
        "We go beyond numbers—offering actionable insights to identify trends, assess risks, and support smarter financial planning for long-term business success.",
      color: "red",
    },
  ];

  return (
    <>
      {/* First Section start from here */}
      <section className="accounting-hero">
        <div className="overlay">
          <div className="content">
            <h1>
            Your Reliable Outsourcing Partner
              for Accounting & Bookkeeping Services
            </h1>
            <p>
            We offer reliable and cost-effective accounting and bookkeeping outsourcing services tailored to your unique business needs. From daily transactions to financial reporting, our experienced professionals ensure accuracy, compliance, and timely delivery.
            </p>
            <button className="cta-button">
              Schedule a Call with Our Accounting Experts Now! <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Second Section start here */}
      <section className="expert-accounting-section">
        <div className="content-wrapper">
          <div className="left-heading">
            <h2>
              Specialized Accounting & Bookkeeping Solutions for Your Business
            </h2>
          </div>
          <div className="right-paragraphs">
            <p>
              Maximize your business potential with our expert accounting and
              bookkeeping services. At TSI, we simplify complex financial data
              and provide meaningful insights that drive smarter business
              decisions. Our experienced professionals deliver tailored
              financial solutions that align with your unique goals and support
              long-term growth. We are dedicated to maintaining the accuracy and
              integrity of your financial records. From daily transaction
              tracking to complete account reconciliation, our reliable
              bookkeeping services lay a solid foundation for better
              decision-making and improved profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Third  Section start from here */}

      <section className="accounting-services">
        <div className="left-content">
          <h2>Accounting Services</h2>
          <p>
          We provide comprehensive accounting solutions tailored to meet the diverse needs of businesses across industries. Whether you're a start-up or an established company, our expert team ensures financial clarity, compliance, and strategic planning to help your business thrive.
          </p>
          <div className="services-list">
            <ul>
              <li> Financial Statement Preparation</li>
              <li> Income Tax Preparation</li>
              <li> Income Tax Planning and Advisory</li>
              <li> Budgeting and Forecasting</li>
              <li> Monthly, Quarterly, and Annual Financial Reporting</li>
              <li> Implementation of Accounting Software</li>
              <li> Payroll and Sales Taxes</li>
            </ul>
            <ul>
              <li> Accounting Assistance</li>
              <li> General Ledger Review</li>
              <li> Bill Paying Services</li>
              <li> Financial Assessment Reports</li>
              <li> Business Start-up Support</li>
              <li> General Business Strategy</li>
              <li> Employee Benefits Planning</li>
              
            </ul>
          </div>
        </div>
        <div
          className="right-image"
          style={{ backgroundImage: `url(${calculate})` }}
        ></div>
      </section>

      {/* Here start Forth Section from here */}
      <section className="tax-planning-section">
        <div
          className="left-image"
          style={{ backgroundImage: `url(${woman1})` }}
        ></div>

        <div className="right-content">
          <h2>Tax Planning & Compliance</h2>
          <p>
          Stay ahead of tax deadlines and optimize your financial outcomes with our comprehensive tax planning and compliance services. Our expert team helps you navigate tax laws with precision—covering everything from strategic planning and year-end optimization to return filing and audit support.
          </p>

          <div className="service-columns">
            <div className="service-category">
              <h4 className="red-underline">Tax Planning Services</h4>
              <ul>
                <li>Strategic Tax Planning</li>
                <li>Capital Gains & Losses Management</li>
                <li>Business Entity Structure Advisory</li>
                <li>Year-End Tax Efficiency Planning</li>
                <li>Retirement Tax Benefit Optimization</li>
              </ul>
            </div>

            <div className="service-category">
              <h4 className="blue-underline">Compliance Services</h4>
              <ul>
                <li>Income Tax Return Preparation</li>
                <li>Advance Tax Calculations & Filing</li>
                <li>Handling Tax Notices & Appeals</li>
                <li>GST Return Filing</li>
                <li>Comprehensive Audit Support</li>
              </ul>
            </div>

            {/* <div className="service-category">
              <h4 className="black-underline">Other Support</h4>
              <ul>
                <li>Tax Projections</li>
                <li>Due Date Alerts</li>
                <li>Reconciliation Support</li>
                <li>Document Management</li>
                <li>Client Dashboards</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Here start Third Section from here */}
      <section className="why-choose-container">
        <h2>Why Choose us</h2>
        <section className="card-grid">
          {data.map((item, index) => (
            <section className={`card card-${item.color}`} key={index}>
              <h3 className={`title title-${item.color}`}>{item.title}</h3>
              <p>{item.content}</p>
            </section>
          ))}
        </section>
      </section>

      {/* Here start 6th Section from Here */}
      <section className="connect-form-section">
        <h2>Let's Connect</h2>
        <form className="connect-form">
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Last Name*" required />
          <input type="text" placeholder="Company Name*" required />
          <input type="tel" placeholder="Phone*" required />
          <input type="email" placeholder="Email*" required />
          <select required>
            <option value="">How did you hear about us?*</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
          <textarea placeholder="Message" rows="5" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Accounting;
