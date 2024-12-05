import React, { useState } from "react";
import { ProjectsPageData } from "../Data";
import PageHeading from "../components/PageHeading";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";
import { motion } from "motion/react";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("All");

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };
  return (
    <div>
      <PageHeading
        heading={ProjectsPageData.heading}
        desc={ProjectsPageData.desc}
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
        className="projects_container"
      >
        {ProjectsPageData &&
          ProjectsPageData.sections?.map((item) => (
            <button
              key={item.name}
              className={`button-transition ${
                activeSection === item.name ? "active button-slider" : ""
              }`}
              onClick={() => handleButtonClick(item.name)}
            >
              {item.name}
            </button>
          ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1 }}
        className="projects_data"
      >
        {ProjectsPageData.sections?.map((section) => {
          if (section.name === activeSection) {
            return (
              <React.Fragment key={section.name}>
                {section.children?.length > 0 &&
                  section.children?.map((item, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        name={item.name}
                        image={item.image}
                        url={item.url}
                        demo={item.demo}
                      />
                    );
                  })}
              </React.Fragment>
            );
          }
          return null;
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
