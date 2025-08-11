import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div
      className=" h-[100vh] text-2xl font-medium  dark:text-glow-white"
      id="Home"
    >
      <Typewriter
        words={[
          "Hello World!",
          "This is a typing effect.",
          "Pretty cool, right?",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </div>
  );
};

export default HeroSection;
