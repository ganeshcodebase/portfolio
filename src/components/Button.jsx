import React from "react";
import "./Button.css";
const Button = ({ text, Img }) => {
  return (
    <div className="button-container">
      <button type="submit">
        <span>{text}</span>
        {Img && <img src={Img} alt="icon" width={20} />}
      </button>
    </div>
  );
};

export default Button;
