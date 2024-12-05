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
            ExperiencePageData.data.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#EEEEEE", color: "black" }}
                contentArrowStyle={{
                  borderRight: "7px solid" + item.color,
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
                <div style={{fontSize:'20px'}} className="vertical-timeline-element-title">
                  {item.heading}
                </div>
                <div style={{fontSize:'16px'}} className="vertical-timeline-element-subtitle">
                  {item.sub_heading}
                </div>
                <div style={{marginTop:'10px'}}>{item.skills}</div>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
