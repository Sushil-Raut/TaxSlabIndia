import React from 'react';
import '../PolicyStyle/AntyTerms.scss';

const AntyTerms = () => {
  return (
    <div className="anty-container">
      <h1>Anti-Spam Policy</h1>
      <p className="updated">Last Updated: 2025</p>

      <div className="anty-card">
        <h2>Introduction</h2>
        <p>
          This Anti-Spam Policy (the “Policy”) sets forth the guidelines and requirements for preventing and combating spam on the TaxSlabIndia website (www.taxslabindia.com). By using our website, you agree to comply with this Policy. If you do not agree with this Policy, please do not use our website.
        </p>
      </div>

      <div className="anty-card">
        <h2>Definition of Spam</h2>
        <p>
          For the purposes of this Policy, “spam” refers to unsolicited, bulk, or indiscriminate messages, typically sent for a commercial purpose. This includes, but is not limited to, emails, instant messaging, social media messages, and other forms of electronic communication.
        </p>
      </div>

      <div className="anty-card">
        <h2>Prohibited Activities</h2>
        <ul>
          <li>Sending unsolicited and unauthorized promotional content or advertisements.</li>
          <li>Using any automated system, software, or process to send spam.</li>
          <li>Harvesting or collecting email addresses or other contact information from our website for the purpose of sending spam.</li>
          <li>Falsifying header information in any communication, including email or posting misleading information.</li>
        </ul>
      </div>

      <div className="anty-card">
        <h2>User Contributions</h2>
        <p>
          If users contribute content, such as comments, reviews, or other submissions, they must not use the website to transmit, directly or indirectly, any spam. Users are solely responsible for the content they contribute.
        </p>
      </div>

      <div className="anty-card">
        <h2>Reporting Spam</h2>
        <p>
          If you believe that you have received spam from or through our website, please contact us immediately at <a href="mailto:spamreport@ezmybiz.com">spamreport@ezmybiz.com</a>. We will investigate the issue promptly and take appropriate action.
        </p>
      </div>

      <div className="anty-card">
        <h2>Consequences of Violation</h2>
        <p>
          Violating this Anti-Spam Policy may result in the termination of access to our website and other legal consequences. We reserve the right to take any action we deem necessary to prevent and mitigate spam activities.
        </p>
      </div>

      <div className="anty-card">
        <h2>Changes to this Policy</h2>
        <p>
          We may update this Anti-Spam Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our policies regarding spam.
        </p>
      </div>

      <div className="anty-card">
        <h2>Contact Information</h2>
        <p>
          If you have any questions about this Anti-Spam Policy, please contact us at <a href="mailto:support@ezmybiz.com">support@ezmybiz.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AntyTerms;
