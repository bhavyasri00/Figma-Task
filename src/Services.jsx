import React from "react";
import "./Services.css";

// Import images from src/assets
import iconDev from "./assets/Icon5.png";
import iconUIUX from "./assets/Icon.png";
import iconGraphic from "./assets/Icon1.png";
import iconMotion from "./assets/Icon2.png";
import iconPhoto from "./assets/Icon3.png";
import iconVideo from "./assets/Icon4.png";
import triangle2 from "./assets/triangle2.png";
import add from "./assets/add.png";

const servicesData = [
  {
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
    icon: iconDev,
  },
  {
    title: "UI/UX Designer",
    description:
      "We provide UI/UX Design services, and of course with the best quality.",
    icon: iconUIUX,
  },
  {
    title: "Graphic Designer",
    description: "We provide Graphic Design services, with the best designers.",
    icon: iconGraphic,
  },
  {
    title: "Motion Graphic",
    description: "Create a platform with the best and coolest quality from us.",
    icon: iconMotion,
  },
  {
    title: "Photography",
    description:
      "We provide Photography services, and of course with the best quality.",
    icon: iconPhoto,
  },
  {
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
    icon: iconVideo,
  },
];

const Services = () => {
  return (
    <section className="services">
      <img src={triangle2} alt="triangle decoration" className="triangle2" />
      <img src={add} alt="top decoration" className="add-top" />
      <img src={add} alt="bottom decoration" className="add-bottom" />

      <h2 className="services-title">The Services We Provide For You</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
