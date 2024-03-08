import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2023 SPACEX STORE</p>
        <div className="footer-links">
          <a href="#" className="footer-link">
            FAQs
          </a>
          <a href="#" className="footer-link">
            Search
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
