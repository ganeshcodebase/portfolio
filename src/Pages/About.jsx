import React, { useRef } from "react";
import PageHeading from "../components/PageHeading";
import "./About.css";
import { AboutPageData } from "../Data/index";
import AboutCard from "../components/AboutCard";
import Doc from "../Assets/Images/doc.svg";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="about-image-section"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="about-image"
          ></motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="about-section"
        >
          <div className="about-card-section">
            {AboutPageData?.data.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <AboutCard title={item.name} exp={item.exp} img={item.img} />
              </motion.div>
            ))}
          </div>
          <div className="about-content">{AboutPageData.description}</div>
          <div>
            <div className="button-container">
              <motion.button
                whileHover={{ scale: 1.1 }}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleDownloadCV}
              >
                <span>{AboutPageData.buttonText}</span>
                {Doc && <img src={Doc} alt="icon" width={20} />}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
