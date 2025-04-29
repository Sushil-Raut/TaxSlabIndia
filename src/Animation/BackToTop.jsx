// components/BackToTop.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp,FaChevronUp } from "react-icons/fa";
// import "../Styles/BackToTop.scss";
import '../AnimationStyle/BackToTop.scss';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default BackToTop;
