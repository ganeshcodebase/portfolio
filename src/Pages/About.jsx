import React from "react";
import PageHeading from "../components/PageHeading";
import "./About.css";
import { AboutPageData } from "../Data/index";
import AboutCard from "../components/AboutCard";
import Doc from "../Assets/Images/doc.svg";
const About = () => {
  const handleDownloadCV = () => {
    const url = AboutPageData.buttonUrl;
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="about container">
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
            <div className="button-container">
              <button onClick={() => handleDownloadCV()}>
                <span>{AboutPageData.buttonText}</span>
                {Doc && <img src={Doc} alt="icon" width={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
