import React from "react";
import "./ProjectCard.css";
// import Imag from "../Assets/Images/p1.png";

const ProjectCard = ({ name, image, url, demo }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="project-card-image">
          <img src={image} />
        </div>
      </div>
      <div className="project-card-data">{name}</div>
      <div className="project-card-data-buttons">
        <button className="project-card-button">
          <a href={demo} target="_blank">
            Demo
          </a>
        </button>
        <button className="project-card-button">
          <a href={url} target="_blank">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
