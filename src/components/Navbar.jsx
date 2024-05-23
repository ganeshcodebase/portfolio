import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">Portfolio.</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
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
