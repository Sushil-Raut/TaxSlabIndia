import React from "react";
import "../ServicesStyle/PayrollOutsourcing.scss";
import { Link } from "react-router-dom";

const PayrollOutsourcing = () => {
  return (
    <div className="payroll-container">
      <section className="hero">
        <h1>Payroll Outsourcing Services</h1>
        <p>
          Simplify your business operations with our expert payroll solutions –
          secure, compliant, and stress-free.
        </p>
      </section>

      <section className="intro">
        <h2>What is Payroll Outsourcing?</h2>
        <p>
          Payroll outsourcing is the process of hiring a third-party service
          provider to handle payroll functions, including salary computation,
          tax filing, statutory compliance, payslip generation, and more. It
          allows businesses to focus on core activities while ensuring accuracy,
          confidentiality, and compliance with legal norms.
        </p>
      </section>

      <section className="benefits">
        <h2>Benefits of Payroll Outsourcing</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Cost Effective</h3>
            <p>
              Reduces administrative costs by eliminating the need for an
              in-house payroll department.
            </p>
          </div>
          <div className="card">
            <h3>Time Saving</h3>
            <p>
              Frees up time to focus on business growth and operations instead
              of tedious payroll tasks.
            </p>
          </div>
          <div className="card">
            <h3>Accuracy</h3>
            <p>
              Minimizes the risk of payroll errors and penalties by leveraging
              automated tools and expertise.
            </p>
          </div>
          <div className="card">
            <h3>Data Security</h3>
            <p>
              Ensures confidentiality and protection of employee data through
              secure software systems.
            </p>
          </div>
          <div className="card">
            <h3>Compliance</h3>
            <p>
              Stay updated with tax laws, PF, ESI, TDS, and labor regulations
              without manual tracking.
            </p>
          </div>
          <div className="card">
            <h3>Custom Reports</h3>
            <p>
              Generate customized reports and insights for better HR and finance
              decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="process">
        <h2>How Our Payroll Process Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Share employee data & pay structure</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>We calculate salaries, deductions, and taxes</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Generate payslips & file compliances</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Monthly reports delivered to management</p>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose PayrollNexus for Payroll Services?</h2>
        <ul>
          <li>Dedicated payroll experts</li>
          <li>Fully automated & cloud-based system</li>
          <li>100% statutory compliance assurance</li>
          <li>Responsive support team</li>
          <li>Custom pricing for startups, SMEs & enterprises</li>
        </ul>
      </section>

      <div className="cta">
        <h2>Let's Get Started!</h2>
        <p>
          Experience smooth payroll management with PayrollNexus. Book your free
          consultation now.
        </p>
        <Link to="/contact">
          <button>Book Free Consultation</button>
        </Link>
      </div>
    </div>
  );
};

export default PayrollOutsourcing;
