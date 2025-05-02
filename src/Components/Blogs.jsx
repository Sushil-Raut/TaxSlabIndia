import React from 'react';
import '../Styles/Blogs.scss';

const Blogs = () => {
  return (
    <div className="tax-container">
      <h1 className="main-title">Income Tax Slabs & Complete Guide</h1>

      <section className="tax-section">
        <h2>Proposed Income Tax Slabs for FY 2025-26 (AY 2026-27) - New Regime</h2>
        <ul>
          <li> ₹0 - ₹4,00,000: Nil</li>
          <li>₹4,00,001 - ₹8,00,000: 5%</li>
          <li>₹8,00,001 - ₹12,00,000: 10%</li>
          <li>₹12,00,001 - ₹16,00,000: 15%</li>
          <li>₹16,00,001 - ₹20,00,000: 20%</li>
          <li>₹20,00,001 - ₹24,00,000: 25%</li>
          <li>Above ₹24,00,000: 30%</li>
        </ul>
        <p><strong>Note:</strong> These rates are proposed and subject to change based on government notifications.</p>
        <p><strong> Section 87A rebate:</strong> The rebate has been increased, which benefits individuals with taxable income up to ₹7 lakh.</p>
        <p><strong> Standard deduction:</strong> Salaried individuals now receive a standard deduction of ₹75,000.</p>
        <p>These updates effectively reduce the tax liability for incomes up to around ₹12.75 lakh.</p>
      </section>

      <section className="tax-section">
        <h2>Current Income Tax Slabs for FY 2024-25 (AY 2025-26) - New Regime</h2>
        <p>The same slab rates as proposed for FY 2025-26 are applicable:</p>
        <ul>
          <li>₹0 - ₹3,00,000: Nil</li>
          <li>₹3,00,001 - ₹6,00,000: 5%</li>
          <li>₹6,00,001 - ₹9,00,000: 10%</li>
          <li>₹9,00,001 - ₹12,00,000: 15%</li>
          <li>₹12,00,001 - ₹15,00,000: 20%</li>
          <li>Above ₹15,00,000: 30%</li>
        </ul>
        <p><strong>Rebate under Section 87A:</strong> Individuals with income up to ₹7 lakh are eligible for a full rebate, resulting in zero tax liability.</p>
      </section>

      <section className="tax-section">
        <h2>Changes Introduced in Budget 2024 under New Regime</h2>
        <ul>
          <li>Rebate limit raised from ₹5 lakh to ₹7 lakh.</li>
          <li>Standard deduction of ₹50,000 introduced in the new regime for salaried and pensioners.</li>
          <li>Highest surcharge rate reduced from 37% to 25%.</li>
          <li>New tax regime set as the default regime.</li>
          <li>Government aims to simplify compliance and reduce tax burden for middle-class taxpayers.</li>
        </ul>
      </section>

      <section className="tax-section">
        <h2>Features of New Tax Regime</h2>
        <ul>
          <li>Simplified tax structure with fewer exemptions.</li>
          <li>Lower tax rates compared to the old regime.</li>
          <li>Encourages transparency in tax filings.</li>
          <li>No need to invest just to save tax.</li>
          <li>Can switch between regimes every financial year (non-business income).</li>
          <li>No exemptions for HRA, LTA, 80C, 80D, home loan interest, etc.</li>
        </ul>
      </section>

      <section className="tax-section">
        <h2>Income Tax Slabs under New Regime for FY 2023-24 (AY 2024-25)</h2>
        <ul>
          <li>₹0 - ₹2,50,000: Nil</li>
          <li>₹2,50,001 - ₹5,00,000: 5%</li>
          <li>₹5,00,001 - ₹7,50,000: 10%</li>
          <li>₹7,50,001 - ₹10,00,000: 15%</li>
          <li>₹10,00,001 - ₹12,50,000: 20%</li>
          <li>₹12,50,001 - ₹15,00,000: 25%</li>
          <li>Above ₹15,00,000: 30%</li>
        </ul>
        <p><strong>Rebate:</strong> Up to ₹5 lakh income was eligible for rebate under Section 87A.</p>
      </section>

      <section className="tax-section">
        <h2>Old Regime Tax Slabs Comparison (FY 2024-25, 2023-24, 2022-23, 2021-22)</h2>
        <p><strong>For Individuals below 60 years:</strong></p>
        <ul>
          <li>₹0 - ₹2,50,000: Nil</li>
          <li>₹2,50,001 - ₹5,00,000: 5%</li>
          <li>₹5,00,001 - ₹10,00,000: 20%</li>
          <li>Above ₹10,00,000: 30%</li>
        </ul>
        <p><strong>Senior Citizens (60 to 80 years):</strong> Basic exemption up to ₹3,00,000.</p>
        <p><strong>Super Senior Citizens (80+ years):</strong> Basic exemption up to ₹5,00,000.</p>
        <p>Old regime allows deductions like 80C (up to ₹1.5 lakh), 80D (medical insurance), HRA, LTA, and home loan interest under Section 24.</p>
      </section>

      <section className="tax-section">
        <h2>How to Calculate Income Tax Payable Under New Tax Regime?</h2>
        <ol>
          <li>Calculate total income from all heads (Salary, Business, Capital Gains, etc.).</li>
          <li>Deduct ₹50,000 standard deduction if salaried or pensioner.</li>
          <li>Apply the new tax slab rates step-wise.</li>
          <li>Add 4% health and education cess on the calculated tax.</li>
          <li>Subtract TDS and advance tax already paid.</li>
        </ol>
        <p><strong>Note:</strong> Under the new regime, most exemptions like 80C, HRA, etc. are not available. Tax computation is based on gross taxable income minus only standard deduction and employer NPS contributions.</p>
      </section>

      <section className="tax-section">
        <h2>Which Regime is Better for You?</h2>
        <p>The choice depends on your income and the exemptions you claim. Use the new regime if:</p>
        <ul>
          <li>You do not claim many deductions and prefer simplicity.</li>
          <li>Your income is below ₹7 lakh (due to full rebate).</li>
          <li>You are a salaried individual with only standard deduction.</li>
        </ul>
        <p>Stick to the old regime if:</p>
        <ul>
          <li>You claim significant deductions under 80C, HRA, 80D, home loan interest.</li>
          <li>You are investing regularly in tax-saving schemes.</li>
        </ul>
      </section>
    </div>
  );
};

export default Blogs;
