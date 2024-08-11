import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillRibbon from "./components/SkillRibbon";
import WorkingProcess from "./components/WorkingProcess";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <SkillRibbon />
      <div id="about">
        <AboutMe />
      </div>
      <div id="process">
        <WorkingProcess />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonial  />
      </div>
      <SkillRibbon />
      <Footer id="footer" />
    </>
  );
}

export default App;
