import React from "react";
import "./AboutCard.css";

const AboutCard = ({ title, exp, img }) => {
  return (
    <div className="about-card">
      <img src={img} alt="img" width={20} />
      <div className="about-card-title">{title}</div>
      <div className="exp">{exp}</div>
    </div>
  );
};

export default AboutCard;
