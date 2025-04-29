import React from 'react';
import '../Styles/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-panel">
        <h2>Let's Chat</h2>
        <p>
          Whether you have a question, want to start a project or simply want to connect.
        </p>
        <p>Feel free to send me a message in the contact form</p>
      </div>
      <div className="right-panel">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Company" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" rows="4" />
          <button type="submit">Submit</button>
          <p>Our experts will contact you shortly. We respect your privacy and never share your details.</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
