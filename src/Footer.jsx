import React from "react";
import "./Footer.css";
import logo from "./assets/image2.png"; // import the logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="logo-image">
          <img src={logo} alt="Enver Logo" />
        </div>
        <ul className="footer-links">
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>© 2022 Enver, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
