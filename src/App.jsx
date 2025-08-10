import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Component/Navbar/Navbar";
import AboutSection from "./Component/AboutSection/AboutSection";
import Projects from "./Component/Projects/Projects";
import HeroSection from "./Component/HeroSection/HeroSection";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import VideoBackground from "./Component/Others/VideoBackground";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <VideoBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
