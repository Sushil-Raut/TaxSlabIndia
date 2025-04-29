import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import './Styles/App.scss';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import BackToTop from "./Animation/BackToTop";
import ITRFiling from "./Services/ITRFiling";
import GSTRegistration from "./Services/GSTRegistration";
import GSTReturn from "./Services/GSTReturn";
import CompanyRegistration from "./Services/CompanyRegistration";
import TrademarkRegistration from "./Services/TrademarkRegistration";
import PayrollOutsourcing from "./Services/PayrollOutsourcing";
import About from "./Components/About";
import Accounting from "./Services/Accounting";
import Blogs from "./Components/Blogs";
import PrivacyPolicy from "./Policy/PrivacyPolicy";
import CookiePolicy from "./Policy/CookiePolicy";
import Terms from "./Policy/Terms";
import AntyTerms from "./Policy/AntyTerms";
// import ActivateAccount from "./Components/ActivateAccount";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About/>} />
        {/* <Route path="/activeaccount" element={<ActivateAccount />} /> */}
        <Route path="/itrfiling" element={<ITRFiling />} />
        <Route path="/gstregistration" element={<GSTRegistration />} />
        <Route path="/gstreturn" element={<GSTReturn />} />
        <Route path="/companyregistration" element={<CompanyRegistration />} />
        <Route path="/trademark" element={<TrademarkRegistration />} />
        <Route path="/payrolloutsorcing" element={<PayrollOutsourcing />} />
        <Route path="/accounting" element={<Accounting />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/priviacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/antyterms" element={<AntyTerms />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />

    </Router>
  );
}

export default App;
