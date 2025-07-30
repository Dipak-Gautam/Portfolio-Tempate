import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import AboutSection from "./Component/AboutSection/AboutSection";
import Projects from "./Component/Projects/Projects";
import HeroSection from "./Component/HeroSection/HeroSection";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div className="">
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
