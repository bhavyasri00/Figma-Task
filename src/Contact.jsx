import React from "react";
import "./Contact.css";

// Import images from assets
import circle from "./assets/circle.png";
import zigzag from "./assets/zig-zag.png";
import plusIcon from "./assets/Icon6.png";

export const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="circle-bottom">
        <img src={circle} alt="ellipse" />
      </div>
      <div className="zig-zag">
        <img src={zigzag} alt="zig-zag" />
      </div>
      <div className="contact-box">
        <div className="plus-icon">
          <img src={plusIcon} alt="plus icon" className="icon" />
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <h2>Contact us for the service you want to use</h2>
          </div>
          <div className="contact-right">
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
