import React from "react";
import Navbar from "../components/Navbar";

import { HomePageData } from "../Data";
import "../Pages/HomePage.css";
import Button from "../components/Button";
import Send from "../Assets/Images/send.svg";
import Mouse from "../Assets/Images/mouse.svg";
import ArrowDown from "../Assets/Images/arrowdown.svg";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="banner container">
          <div className="banner-wrapper-herosection">
            <div className="banner-wrapper-social-media">
              {HomePageData.data.map((item) => (
                <>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt="LinkedIn" />
                  </a>
                </>
              ))}
            </div>
            <div className="banner-data">
              <div className="banner-title">{HomePageData.name} 👋</div>
              <div className="designation-container">
                <span className="line"></span>
                <span className="banner-designation">
                  {HomePageData.designation}
                </span>
              </div>
              <div className="banner-about">{HomePageData.about}</div>
              <a href="#contact">
                <Button text={HomePageData.buttonText} Img={Send} />
              </a>
              <div className="scroll">
                <a href="#about">
                  <span>
                    <img src={Mouse} alt="mouse" width={15} />
                  </span>
                  <span>{HomePageData.scrollDown}</span>
                  <span>
                    <img src={ArrowDown} alt="arrow" width={10} />
                  </span>
                </a>
              </div>
            </div>
            <div className="banner-wrapper-image"></div>
          </div>
        </div>
      </div>
      <div className="scrolling_text">
        <div className="text">
          <span>{HomePageData.scroll}</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
