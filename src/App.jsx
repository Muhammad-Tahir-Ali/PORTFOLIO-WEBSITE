import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillRibbon from "./components/SkillRibbon";
import WorkingProcess from "./components/WorkingProcess"
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

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
        <ProjectSection />
      </div>
      <div id="testimonials">
        <Testimonials  />
      </div>
      <SkillRibbon />
      <Footer id="footer" />
    </>
  );
}

export default App;
