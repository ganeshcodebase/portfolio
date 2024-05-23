import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menu = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/">Portfolio.</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </div>
      <nav ref={menuRef} className={isMenuOpen ? "open" : ""}>
        {menu.map((item, index) => (
          <li key={index} onClick={closeMenu}>
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
