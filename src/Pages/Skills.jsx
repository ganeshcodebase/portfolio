import React from "react";
import "./Skills.css";
import PageHeading from "../components/PageHeading";
import { SkillsPageData } from "../Data";
import SkillPageCard from "../components/SkillPageCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div>
        <PageHeading
          heading={SkillsPageData.heading}
          desc={SkillsPageData.desc}
        />
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1 }}
          className="skills-page-banner"
        >
          <SkillPageCard />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
