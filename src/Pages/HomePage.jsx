import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
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
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="banner-wrapper-social-media"
            >
              {HomePageData.data.map((item) => (
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt="LinkedIn" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
            <div className="banner-data">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="banner-title"
              >
                {HomePageData.name} 👋
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="designation-container"
              >
                <span className="line"></span>
                <span className="banner-designation">
                  {HomePageData.designation}
                </span>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="banner-about"
              >
                {HomePageData.about}
              </motion.div>
              <a href="#contact">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Button text={HomePageData.buttonText} Img={Send} />
                </motion.div>
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
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="banner-wrapper-image"
            ></motion.div>
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
