import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

// Import images
import circle from "./assets/circle.png";
import triangle from "./assets/triangle.png";
import zigzag from "./assets/zig-zag.png";
import add from "./assets/add.png";
import logo from "./assets/image2.png";
import frame from "./assets/image3.png";
import person from "./assets/image1.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="circle-top">
        <img src={circle} alt="ellipse" />
      </div>

      <div className="triangle">
        <img src={triangle} alt="triangle" />
      </div>

      <div className="zig-zag">
        <img src={zigzag} alt="zig-zag" />
      </div>

      <div className="add">
        <img src={add} alt="add" />
      </div>

      <nav className="nav">
        <div className="logo-image">
          <img src={logo} alt="Enver Logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Our Project
          </a>
          <a href="#" className="nav-link">
            About Us
          </a>
        </div>

        <div>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      <div className="intro-section">
        <div className="intro-text">
          <h2>Build Your Awesome Platform</h2>
          <p>
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers. We will provide the best service for
            those of you who use our services.
          </p>
          <button className="btn">
            Our Services <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>

        <div className="intro-image">
          <img src={frame} alt="frame" className="frame" />
          <img src={person} alt="person pointing" className="image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
