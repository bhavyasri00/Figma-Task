import React, { useState, useEffect } from "react";
import "./Project.css";

// Import images
import image28 from "./assets/image28.png";
import image29 from "./assets/image29.png";
import image30 from "./assets/image30.png";

const images = [image28, image29, image30];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2 className="title">Our Awesome Portfolio</h2>
        <div className="circle-group">
          <div className="circle"></div>
          <div className="circle overlap"></div>
        </div>
      </div>

      {isMobile ? (
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Portfolio ${index + 1}`} />
            ))}
          </div>
          <div className="arrow-group">
            <button className="arrow left" onClick={handlePrev}>
              ←
            </button>
            <button className="arrow right" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="portfolio-grid">
            {images.map((src, index) => (
              <div key={index} className="mockup">
                <img src={src} alt={`Portfolio ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="zigzag"></div>
          <div className="dot-indicator"></div>
        </>
      )}
    </section>
  );
};

export default Projects;
