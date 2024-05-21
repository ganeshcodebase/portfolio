import React from "react";
import "./Skills.css";
import PageHeading from "../components/PageHeading";
import { SkillsPageData } from "../Data";
import SkillPageCard from "../components/SkillPageCard";
const Skills = () => {
  return (
    <>
      <div>
        <PageHeading
          heading={SkillsPageData.heading}
          desc={SkillsPageData.desc}
        />
        <div className="skills-page-banner">
          <SkillPageCard/>
        </div>
      </div>
    </>
  );
};

export default Skills;
