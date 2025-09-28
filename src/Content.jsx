import React from "react";
import "./Content.css";
import videoThumbnail from "./assets/image4.png"; // import image from assets

const Content = () => {
  return (
    <section className="why-enver">
      <div className="text">
        <h2 className="title">Why Enver is The Best Choice?</h2>
        <p className="description">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className="video-thumbnail">
        <img src={videoThumbnail} alt="Video preview" />
      </div>
    </section>
  );
};

export default Content;
