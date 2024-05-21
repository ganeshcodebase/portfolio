import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeading from "../components/PageHeading";
import { ExperiencePageData } from "../Data";

const Experience = () => {
  return (
    <div className="Experience-container">
      <PageHeading
        heading={ExperiencePageData.heading}
        desc={ExperiencePageData.desc}
      />
      <div>
        <VerticalTimeline lineColor="black">
          {ExperiencePageData &&
            ExperiencePageData.data.map((item,index) => (
              <VerticalTimelineElement
              key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#c7c8cc", color: "black" }}
                contentArrowStyle={{
                  borderRight: "7px solid #c7c8cc",
                }}
                date={item.date}
                iconStyle={{
                  background: item.color,
                  color: "#fff",
                  alignContent: "center",
                  textAlign: "center",
                }}
                icon={<img src={item.image} width={25} alt="icon" />}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.heading}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.sub_heading}
                </h4>
                <p>{item.skills}</p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
