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
import MyServices from "./Component/MyServices/MyServices";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="text-gray-800 dark:text-gray-100 transition-colors duration-[2000] ease-in">
      <VideoBackground darkMode={darkMode} />
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <HeroSection />
      <AboutSection />
      <MyServices />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
