import React from "react";
import "./PageHeading.css";
const PageHeading = ({ heading, desc }) => {
  return (
    <div className="page-heding-container">
      <div className="page-heading">{heading}</div>
      <div>{desc}</div>
    </div>
  );
};

export default PageHeading;
