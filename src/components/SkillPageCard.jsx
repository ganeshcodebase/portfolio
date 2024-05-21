import React from "react";
import "./SkillPageCard.css";
import { SkillsPageData } from "../Data";
import CheckMark from "../Assets/Images/Checkmark.svg";

const SkillPageCard = () => {
  return (
    <div className="skills-page-card-container">
      {SkillsPageData?.data.map((skill) => (
        <>
          <div className="skills-page-card">
            <div className="title"> {skill.name}</div>
            {[...Array(Math.ceil(skill.skills?.length / 2))].map(
              (_, rowIndex) => (
                <div key={rowIndex}>
                  <div className="skills-page-card-section">
                    {skill.skills
                      ?.slice(rowIndex * 2, rowIndex * 2 + 2)
                      .map((skill, index) => (
                        <>
                          <div
                            style={{
                              width: "25%",
                            }}
                          >
                            <div className="title">
                              <img
                                src={CheckMark}
                                width={20}
                                style={{ marginRight: "5px" }}
                                alt="icon"
                              />
                              {skill.name}
                            </div>
                            <div className="desc">{skill.desc}</div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default SkillPageCard;
