import React from "react";
import "../ServicesStyle/GSTReturn.scss";

const GSTReturn = () => {
  return (
    <>
      <div className="gst-return-container">
        <h1 className="gst-return-heading">GST Return Filing Services</h1>
      
        {/* Here Start First Section */}
        <section className="gst-return-section-what-is-gst">
        <h2>What is GST Return?</h2>
        <p className="section-description">
            GST Return is a process used to declare the Goods and Services Tax
            (GST) liability of a taxpayer. It is an online form that contains
            the details of all the supplies made, input tax credit availed, and
            the GST due for a particular period. It must be filed regularly, as
            per the GST law, to ensure that the taxpayer complies with the GST
            regulations. Moreover, it ensures that the GST collected is properly
            deposited with the government in a timely manner.
          </p>
          <p className="section-description">
            Under GST, a registered dealer has to file GST returns that broadly
            include:
          </p>
        <div className="reasons-grid">
          <div className="reason-card">Purchases</div>
          <div className="reason-card">Sales</div>
          <div className="reason-card">Output GST (On sales)</div>
          <div className="reason-card">Input tax credit (GST paid on purchases)</div>                 
        </div>
      </section>  

        <section className="gst-return-section-who-should-file">
          <h2 className="section-heading">
            Who is liable to file GST Returns?
          </h2>
          <p className="section-description">
            Individuals and businesses who are registered under GST must file
            GST returns. All registered GST taxpayers must file their returns on
            a quarterly/monthly basis. The due date for filing GST returns
            varies depending on the type of taxpayer.
          </p>
        </section>
        {/* Here start Advantages of GST Return Filing Section  */}
        <section className="gst-return-section-advantages">
        <h2>Advantages of GST Return Filing</h2>
        <p className="section-description">
            Filing GST returns simplifies tax processes and offers several
            benefits:
          </p>
        <div className="reasons-grid">
          <div className="reason-card">Removing cascading tax effect</div>
          <div className="reason-card">Higher threshold for registration</div>
          <div className="reason-card">Composition scheme for small businesses</div>
          <div className="reason-card">Simpler online procedure under GST Return</div>
          <div className="reason-card">Lesser number of compliances</div>         
          <div className="reason-card">Regulating the unorganized sector</div>         
          <div className="reason-card">Defined treatment of E-Commerce</div>         
          <div className="reason-card">Increased efficiency of logistics</div>         
        </div>
      </section>

       

        <section className="gst-return-section types-of-returns">
          <h2 className="section-heading">Types of GST Returns</h2>
          <div className="table-container">
            <table className="gst-table">
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Form Name</th>
                  <th>Details</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["01", "GSTR-1", "Outward supplies", "10th of next month"],
                  [
                    "02",
                    "GSTR-2",
                    "Inward supplies (claim ITC)",
                    "15th of next month",
                  ],
                  [
                    "03",
                    "GSTR-3",
                    "Monthly return with payment",
                    "20th of next month",
                  ],
                  [
                    "04",
                    "GSTR-4",
                    "Composition suppliers (quarterly)",
                    "18th of next month",
                  ],
                  [
                    "05",
                    "GSTR-5",
                    "Non-resident taxable person",
                    "20th of next month",
                  ],
                  [
                    "06",
                    "GSTR-6",
                    "Input service distributor",
                    "13th of next month",
                  ],
                  [
                    "07",
                    "GSTR-7",
                    "Tax deduction details",
                    "10th of next month",
                  ],
                  [
                    "08",
                    "GSTR-8",
                    "E-commerce operators",
                    "10th of next month",
                  ],
                  [
                    "09",
                    "GSTR-9",
                    "Annual return",
                    "31st December of next year",
                  ],
                  [
                    "10",
                    "GSTR-10",
                    "Final return on cancellation",
                    "Within 3 months",
                  ],
                  [
                    "11",
                    "GSTR-11",
                    "UIN holders claiming refund",
                    "28th of next month",
                  ],
                ].map(([no, form, detail, due], index) => (
                  <tr key={index}>
                    <td>{no}</td>
                    <td>{form}</td>
                    <td>{detail}</td>
                    <td>{due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="GST-Return-Filing">
        <h2>Required Documents for GST Return Filing</h2>
        <div className="reasons-grid">
          <div className="reason-card">Invoices issued to persons with GSTIN (B2B)</div>
          <div className="reason-card">Invoices issued to persons without GSTIN (B2C)</div>
          <div className="reason-card">Inter-state sales summary</div>
          <div className="reason-card">HSN-wise goods summary</div>
          <div className="reason-card">Credit/Debit notes or advance receipts</div>         
        </div>
      </section>     

        {/* FAQ Questions and Answer  */}
        <section className="gst-return-section faq-section">
          <h2 className="section-heading">FAQs</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h4 className="faq-question">
                Who is required to file GST Return under the GST Act?
              </h4>
              <p className="faq-answer">
                Every registered GST taxpayer is required to file GST returns
                either monthly, quarterly, or annually depending on the business
                type and turnover.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                When must I upload my invoice on the GST portal?
              </h4>
              <p className="faq-answer">
                Invoices should be uploaded monthly/quarterly as per your filing
                cycle. Usually, before the 10th of the next month for GSTR-1.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                What is the procedure for revising the return under GST?
              </h4>
              <p className="faq-answer">
                GST returns once filed cannot be revised. Any changes must be
                made in the next month’s return through amendments.
              </p>
            </div>

            <div className="faq-item">
              <h4 className="faq-question">
                What are the consequences of not filing GST returns on time?
              </h4>
              <p className="faq-answer">
                Late filing attracts interest and a late fee. It can also block
                e-way bill generation and lead to cancellation of GST
                registration.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="contact-container">
            <div className="left-panel">
              <h2 className="contact-heading">Let's Chat</h2>
              <p className="contact-description">
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <p className="contact-description">
                Feel free to send me a message in the contact form
              </p>
            </div>
            <div className="right-panel">
              <h2 className="contact-heading">Contact</h2>
              <form className="contact-form">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Name *"
                  required
                />
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email *"
                  required
                />
                <input
                  className="form-input"
                  type="text"
                  placeholder="Company"
                />
                <input className="form-input" type="tel" placeholder="Phone" />
                <textarea
                  className="form-textarea"
                  placeholder="Message"
                  rows="4"
                />
                <button className="form-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GSTReturn;
