import "../ServicesStyle/ITRFiling.scss";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaUpload,
  FaHeadphones,
  FaUser,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

// import React, { useState } from "react";

const ITRFiling = () => {
  // State to hold which tab is active: "DIY" or "Assisted"
  // const [activeTab, setActiveTab] = useState("DIY");

  const steps = [
    {
      icon: <FaFileAlt />,
      title: "Fill Your Basic KYC Information",
      desc: "Fill Your Basic Details Like Name, DOB, PAN No, Aadhar No etc.",
    },
    {
      icon: <FaUpload />,
      title: "Upload Required Documents for ITR Filing",
      desc: "Aadhar Card, Pan Card, Form-16, Salary Slips, Bank Statement, etc.",
    },
    {
      icon: <FaHeadphones />,
      title: "Get Service Request Number",
      desc: "SRN Number is generated after Submit Your Income Tax Return.",
    },
    {
      icon: <FaUser />,
      title: "Our Expert will Contact You",
      desc: "After Confirm Your Order Our Expert Team Contact to You.",
    },
    {
      icon: <FaCheckCircle />,
      title: "ITR-V Submission",
      desc: "Our Experts Filing Your Income Tax Return On e-filing Website & Send You Acknowledgement.",
    },
    {
      icon: <FaShieldAlt />,
      title: "E-Verify Return",
      desc: "After Successfully Filed Your ITR Our Representative Help to You For E-Verify Your Income Tax Return.",
    },
  ];

  return (
    <div className="itr-container">
      <div className="itr-section">
        <div className="itr-left">
          <h1>ITR Filing in India !! Plans Starting from Rs. 499/- only</h1>
          <h3>Personalized Return filings Services from Experts</h3>
          <p>
            ITR filing in India at timely and accurately manner for Individual,
            NRI, Firms and Corporates. ITRFiling.co.in have team of Chartered
            Accountants who have expertise in Income tax and other direct taxes.
            We are Income tax consultants and Income tax advisors is to help
            people and organizations in paying their taxes and filing the Income
            Tax Returns. We hold expertise in Income tax law, Income Tax
            compliance and Income Tax planning.
          </p>
          <a href="tel:+919958081770" className="call-btn">
            Call us: +91-9958081770
          </a>
        </div>

        <div className="itr-right">
          <h2>Interested in our Services!!</h2>
          <p>Fill this form, One of our Executive will contact you soon</p>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Mobile No" />
            <select>
              <option>Select Services</option>
              <option>ITR Filing</option>
              <option>GST Return</option>
              <option>Trademark Registration</option>
              <option>Company Registration</option>
              <option>Payroll Outsourcing</option>
              <option>Accounting Services</option>
            </select>

            {/* Styled Submit Button */}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
          <p className="privacy-text">
            We respect your privacy. Your details will not be shared with
            anyone.
          </p>
        </div>
      </div>

      <h2 className="itr-heading">
        File ITR - Income Tax Return Online with <span>TaxSlabIndia</span>
      </h2>
      <div className="itr-grid">
        {steps.map((step, idx) => (
          <div className="itr-card" key={idx}>
            <div className="itr-icon">{step.icon}</div>
            <div className="itr-title">{step.title}</div>
            <div className="itr-description">{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-section1">
        <h2>Why Should You File ITR?</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            {" "}
            If your total income exceeds the basic exemption limit set by the
            government (currently ₹2.5 lakh for individuals below 60 years), it
            is legally mandatory to file ITR.
          </div>
          <div className="reason-card">
            {" "}
            Most embassies and financial institutions ask for ITR receipts as
            proof of stable income. It strengthens your case during visa
            applications or when applying for loans.
          </div>
          <div className="reason-card">
            Filing ITR allows you to carry forward losses (such as capital
            losses or business losses) to offset them against future income,
            reducing your future tax liability.
          </div>
          <div className="reason-card">
            {" "}
            If excess TDS (Tax Deducted at Source) was deducted from your salary
            or income, you can claim a refund only by filing ITR.
          </div>
        </div>
      </section>

      <section className="who-should-file">
        <h2>Who Should File ITR?</h2>
        <p>
          Anyone with income above ₹2.5 lakhs (₹3 lakhs for seniors, ₹5 lakhs
          for super seniors), businesses, freelancers, NRIs, and those wanting
          to claim refunds or carry forward losses must file.
        </p>
      </section>

      <section className="itr-types">
        <h2>Types of ITR Forms</h2>
        <div className="itr-cards">
          <div className="card">
            <h3>ITR-1 (Sahaj)</h3>
            <p>
              Anyone with income above {"\u20B9"}2.5 lakhs ({"\u20B9"}3 lakhs
              for seniors, {"\u20B9"}5 lakhs for super seniors), businesses,
              freelancers, NRIs, and those wanting to claim refunds or carry
              forward losses must file.
            </p>
          </div>
          <div className="card">
            <h3>ITR-2</h3>
            <p>
              ITR-2 is the Income Tax Return form applicable to individuals and
              Hindu Undivided Families (HUFs) who do not have income from
              business or profession. This form is typically used by those
              having income from salary, house property, capital gains, or
              foreign income/assets, but no income from business or
              self-employment.
            </p>
          </div>
          <div className="card">
            <h3>ITR-3</h3>
            <p>
              ITR-3 is the Income Tax Return form applicable to individuals and
              Hindu Undivided Families (HUFs) who have income from a proprietary
              business or profession. This includes income from freelancing,
              consultancy, shop ownership, service-based businesses, or any
              self-employed profession.
            </p>
          </div>
          <div className="card">
            <h3>ITR-4 (Sugam)</h3>
            <p>
              The Presumptive Income Scheme, as defined under Section 44AD,
              44ADA, and 44AE of the Income Tax Act, is a simplified tax filing
              option designed to ease the compliance burden for small taxpayers
              such as small businesses, professionals, and transporters.
            </p>
          </div>
          <div className="card">
            <h3>ITR-5(Sugam)</h3>
            <p>
              ITR-5 Form is an income tax return form specifically designed for
              entities other than Individuals, Hindu Undivided Families (HUFs),
              and Companies. This form is used by various types of organizations
              and unincorporated bodies such as Partnership Firms, Limited
              Liability Partnerships (LLPs), Association of Persons (AOPs), and
              Body of Individuals (BOIs) to file their income tax returns.
            </p>
          </div>
          <div className="card">
            <h3>ITR-6 (Sugam)</h3>
            <p>
              ITR-6 is the Income Tax Return form that is applicable to
              companies other than those claiming exemption under Section 11 of
              the Income Tax Act. In simple terms, all companies registered
              under the Companies Act — whether private limited or public
              limited — are required to file their income tax return using Form
              ITR-6, unless they are exempt under Section 11 (which deals with
              income from property held for charitable or religious purposes).
            </p>
          </div>

          <div className="card">
            <h3>ITR-7 (Sugam)</h3>
            <p>
              ITR-7 is the Income Tax Return form to be filed by persons
              (including companies) who are required to furnish their return
              under any of the following sections of the Income Tax Act:
            </p>
          </div>
        </div>
      </section>

      <section className="Documents-Required">
        <h2>Documents Required</h2>
        <div className="reasons-grid">
          <div className="reason-card">PAN Card & Aadhaar Card</div>
          <div className="reason-card">Form 16 (for salaried individuals)</div>
          <div className="reason-card">Bank Account Details</div>
          <div className="reason-card">Investment Proofs (80C, 80D, etc.)</div>
          <div className="reason-card">Capital Gains Statement (if any)</div>
          <div className="reason-card">
            Business Income Details (for self-employed)
          </div>
        </div>
      </section>


                
      <section className="how-we-help-card">
        <h2>How We Help</h2>
        <p>We simplify the ITR process by:</p>
        <div className="reasons-grid">
          <div className="reason-card">Collecting required documents.</div>
          <div className="reason-card">Evaluating applicable deductions & tax benefits.</div>
          <div className="reason-card">Filing your ITR accurately and securely.</div>
          <div className="reason-card">Providing you an acknowledgment receipt (ITR-V).</div>      
          
        </div>
        <Link to="/contact">
            <button className="btn-contact">Talk to Our Tax Expert</button>
          </Link>
      </section>
{/* 
      <section className="how-we-help-card">
        <h2>How We Help</h2>
        <div className="card">
          <p>We simplify the ITR process by:</p>
          <ol>
            <li>Collecting required documents.</li>
            <li>Evaluating applicable deductions & tax benefits.</li>
            <li>Filing your ITR accurately and securely.</li>
            <li>Providing you an acknowledgment receipt (ITR-V).</li>
          </ol>
          <Link to="/contact">
            <button className="btn-contact">Talk to Our Tax Expert</button>
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default ITRFiling;
