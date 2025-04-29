import React from 'react';
import '../Styles/About.scss';

const About = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <section className="intro">
        <h2>Simplify Payroll Processing with TaxSlabIndia </h2>
        <p>
          At TaxSlabIndia, we believe that payroll should be simple, precise, and stress-free. We’re a team of experienced payroll professionals dedicated to helping businesses of all sizes streamline their payroll processing, ensure statutory compliance, and focus on what they do best—growing their business.
        </p>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h3>Who We Are</h3>
        <p>
          Founded with the vision of transforming how businesses manage payroll,TaxSlabIndia is a specialized payroll outsourcing company based in India. We bring deep domain knowledge, robust processes, and a client-first mindset to deliver payroll solutions that are:
        </p>
        <ul>
          <li> Accurate and error-free</li>
          <li> Compliant with Indian labor laws</li>
          <li> Cost-efficient and scalable</li>
          <li> Delivered on time, every time</li>
        </ul>
        <p>
          From startups to established enterprises, businesses across industries trust us to manage their payroll end-to-end—with transparency, confidentiality, and absolute reliability.
        </p>
        <p>
          Our mission is to empower businesses by eliminating payroll complexity and delivering reliable, scalable, and fully compliant payroll services with a human touch.
        </p>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <h3>What We Do</h3>
        <p>We offer fully-managed payroll services that take care of:</p>
        <ul>
          <li> Monthly salary processing</li>
          <li> Payslip generation</li>
          <li> TDS & professional tax calculations</li>
          <li> PF, ESI, and other statutory filings</li>
          <li> Full & final settlements</li>
          <li> Compliance with Indian payroll laws</li>
          <li> Employee query handling</li>
        </ul>
        <p>
          Whether you’re a small business without a dedicated HR team or a large organization seeking to optimize operations, Payroll Nexus offers custom solutions to fit your needs.
        </p>
      </section>

      {/* Why TaxSlabIndia? */}
      <section className="why-choose-us">
        <h3>Why TaxSlabIndia?</h3>
        <ul>
          <li> 100% Accuracy, On-Time Delivery</li>
          <li> Full Compliance with Labour Laws</li>
          <li> Cost-Effective for All Business Sizes</li>
          <li> Dedicated Payroll Experts Supporting You</li>
          <li> Transparent Processes with Zero Surprises</li>
        </ul>
        <p>
          We’re not a software company—we’re payroll specialists who handle the process for you. No need to learn new systems or manage complex compliance rules. We do it all, so you don’t have to.
        </p>
      </section>

      {/* Who We Serve */}
      <section className="who-we-serve">
        <h3>Who We Serve</h3>
        <p>We proudly serve clients across:</p>
        <ul>
          <li> Tech Startups</li>
          <li> Logistics & Warehousing</li>
          <li> Manufacturing & Industrial</li>
          <li> Retail Chains</li>
          <li> Healthcare & Education</li>
          <li> Financial Services</li>
        </ul>
      </section>

      {/* Our Difference */}
      <section className="our-difference">
        <h3>Our Difference</h3>
        <ul>
          <li> Human-led services, not just automation</li>
          <li> Personalized support, not generic help desks</li>
          <li> Local expertise with national compliance reach</li>
          <li> Scalable models for every growth stage</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
