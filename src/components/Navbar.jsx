import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const menu = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">Portfolio.</a>
      </div>
      <nav>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
