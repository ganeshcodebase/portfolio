import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import "./variables.css";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
const App = () => {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => e.preventDefault());
  //   function ctrlShiftKey(e, keyCode) {
  //     return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  //   }
  //   const handleKeyDown = (e) => {
  //     if (
  //       e.keyCode === 123 ||
  //       ctrlShiftKey(e, "I") ||
  //       ctrlShiftKey(e, "J") ||
  //       ctrlShiftKey(e, "C") ||
  //       (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  //     )
  //       e.preventDefault();
  //   };
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("contextmenu", (e) => e.preventDefault());
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  return (
    <>
      <section id="/">
        <HomePage />
      </section>
      <div className="container">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section></section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
