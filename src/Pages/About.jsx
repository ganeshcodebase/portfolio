import React from "react";
import PageHeading from "../components/PageHeading";
import "./About.css";
import { AboutPageData } from "../Data/index";
import AboutCard from "../components/AboutCard";
import Button from "../components/Button";
import Doc from "../Assets/Images/doc.svg";
const About = () => {
  return (
    <div className="about">
      <PageHeading heading={AboutPageData.heading} desc={AboutPageData.desc} />
      <div className="about-container">
        <div className="about-image-section">
          <div className="about-image"></div>
        </div>
        <div className="about-section">
          <div className="about-card-section">
            {AboutPageData?.data.map((item) => (
              <div key={item.name}>
                <AboutCard title={item.name} exp={item.exp} img={item.img} />
              </div>
            ))}
          </div>
          <div className="about-content">{AboutPageData.description}</div>
          <div>
            <Button text={AboutPageData.buttonText} Img={Doc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
