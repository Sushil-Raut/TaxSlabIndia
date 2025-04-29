import React, { useState } from 'react';
import '../Styles/ActivateAccount.scss';;

const ActivateAccount = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.trim() === '') {
      setError(true);
    } else {
      setError(false);
      alert(`OTP submitted: ${otp}`);
    }
  };

  return (
    <div className="activate-wrapper">
      <div className="left-info">
        <h2>WELCOME TO TAXBUDDY!</h2>
        <p><strong>TaxBuddy</strong> is India's most trusted tax filing service.</p>
        <ul>
          <li>✅ <strong>16,000+</strong> User Reviews with <strong>Google 4.9 ⭐ ratings</strong></li>
          <li>✅ <strong>10 Lakh+</strong> Happy Tax Filers.</li>
        </ul>
        <p className="upload-note">Simply upload your documents as guided by our CAs. <br />TaxBuddy will take care of the rest.</p>
      </div>

      <div className="right-form">
        <h3>ACTIVATE ACCOUNT</h3>
        <p>Activate your account by entering the OTP received on <strong>8340671092</strong> via SMS</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="OTP*"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className={error ? 'error' : ''}
          />
          {error && <span className="error-text">This field is required</span>}
          <button type="submit" className="submit-btn">SUBMIT ➔</button>
        </form>
        <div className="resend-links">
          <p>Didn't receive an OTP?</p>
          <div className="links">
            <a href="/">Resend OTP on Email</a>
            <a href="/">Resend OTP on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
