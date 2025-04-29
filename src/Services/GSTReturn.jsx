import React from "react";
import "../ServicesStyle/GSTReturn.scss";

const GSTReturn = () => {
  return (
    <>
      <div className="gst-return-container">
        <h1 className="main-heading">GST Return Filing Services</h1>

        <section>
          <h2>What is GST Return?</h2>
          <p>
            GST Return is a process used to declare the Goods and Services Tax
            (GST) liability of a taxpayer. It is an online form that contains
            the details of all the supplies made, input tax credit availed, and
            the GST due for a particular period. It must be filed regularly, as
            per the GST law, to ensure that the taxpayer complies with the GST
            regulations. Moreover, it ensures that the GST collected is properly
            deposited with the government in a timely manner.
          </p>
          <p>
            Under GST, a registered dealer has to file GST returns that broadly
            include:
          </p>
          <ul>
            <li>Purchases</li>
            <li>Sales</li>
            <li>Output GST (On sales)</li>
            <li>Input tax credit (GST paid on purchases)</li>
          </ul>
        </section>

        <section>
          <h2>Who is liable to file GST Returns?</h2>
          <p>
            Individuals and businesses who are registered under GST must file
            GST returns. All registered GST taxpayers must file their returns on
            a quarterly/monthly basis. The due date for filing GST returns
            varies depending on the type of taxpayer.
          </p>
        </section>

        <section>
          <h2>Advantages of GST Return Filing</h2>
          <p>
            Filing GST returns simplifies tax processes and offers several
            benefits:
          </p>
          <ul>
            <li>Removing cascading tax effect</li>
            <li>Higher threshold for registration</li>
            <li>Composition scheme for small businesses</li>
            <li>Simpler online procedure under GST Return</li>
            <li>Lesser number of compliances</li>
            <li>Regulating the unorganized sector</li>
            <li>Defined treatment of E-Commerce</li>
            <li>Increased efficiency of logistics</li>
          </ul>
        </section>

        <section>
          <h2>Types of GST Returns</h2>
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Form Name</th>
                <th>Details</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>GSTR-1</td>
                <td>Outward supplies</td>
                <td>10th of next month</td>
              </tr>
              <tr>
                <td>02</td>
                <td>GSTR-2</td>
                <td>Inward supplies (claim ITC)</td>
                <td>15th of next month</td>
              </tr>
              <tr>
                <td>03</td>
                <td>GSTR-3</td>
                <td>Monthly return with payment</td>
                <td>20th of next month</td>
              </tr>
              <tr>
                <td>04</td>
                <td>GSTR-4</td>
                <td>Composition suppliers (quarterly)</td>
                <td>18th of next month</td>
              </tr>
              <tr>
                <td>05</td>
                <td>GSTR-5</td>
                <td>Non-resident taxable person</td>
                <td>20th of next month</td>
              </tr>
              <tr>
                <td>06</td>
                <td>GSTR-6</td>
                <td>Input service distributor</td>
                <td>13th of next month</td>
              </tr>
              <tr>
                <td>07</td>
                <td>GSTR-7</td>
                <td>Tax deduction details</td>
                <td>10th of next month</td>
              </tr>
              <tr>
                <td>08</td>
                <td>GSTR-8</td>
                <td>E-commerce operators</td>
                <td>10th of next month</td>
              </tr>
              <tr>
                <td>09</td>
                <td>GSTR-9</td>
                <td>Annual return</td>
                <td>31st December of next year</td>
              </tr>
              <tr>
                <td>10</td>
                <td>GSTR-10</td>
                <td>Final return on cancellation</td>
                <td>Within 3 months</td>
              </tr>
              <tr>
                <td>11</td>
                <td>GSTR-11</td>
                <td>UIN holders claiming refund</td>
                <td>28th of next month</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Required Documents for GST Return Filing</h2>
          <ul>
            <li>Invoices issued to persons with GSTIN (B2B)</li>
            <li>Invoices issued to persons without GSTIN (B2C)</li>
            <li>Inter-state sales summary</li>
            <li>HSN-wise goods summary</li>
            <li>Credit/Debit notes or advance receipts</li>
          </ul>
        </section>

        <section>
          <h2>FAQs</h2>
          <div className="faq">
            <h4>Who is required to file GST Return under the GST Act?</h4>
            <p>
              Every registered GST taxpayer is required to file GST returns
              either monthly, quarterly, or annually depending on the business
              type and turnover.
            </p>

            <h4>When must I upload my invoice on the GST portal?</h4>
            <p>
              Invoices should be uploaded monthly/quarterly as per your filing
              cycle. Usually, before the 10th of the next month for GSTR-1.
            </p>

            <h4>What is the procedure for revising the return under GST?</h4>
            <p>
              GST returns once filed cannot be revised. Any changes must be made
              in the next month’s return through amendments.
            </p>

            <h4>
              What are the consequences of not filing GST returns on time?
            </h4>
            <p>
              Late filing attracts interest and a late fee. It can also block
              e-way bill generation and lead to cancellation of GST
              registration.
            </p>
          </div>
        </section>
        <section className="cta-section">
          <div className="contact-container">
            <div className="left-panel">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
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
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GSTReturn;
