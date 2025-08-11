import React, { useEffect, useState } from "react";

const VideoBackground = ({ darkMode }) => {
  const [showTransition, setShowTransition] = useState(false);
  const [currentMode, setCurrentMode] = useState(darkMode);
  const [transitionSrc, setTransitionSrc] = useState("");

  useEffect(() => {
    if (darkMode !== currentMode) {
      if (currentMode && !darkMode) {
        setTransitionSrc("/darkToLight.mp4");
      } else if (!currentMode && darkMode) {
        setTransitionSrc("/lightToDark.mp4");
      }

      setShowTransition(true);

      const timer = setTimeout(() => {
        setShowTransition(false);
        setCurrentMode(darkMode);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [darkMode, currentMode]);

  if (showTransition) {
    return (
      <video
        key="transition"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop={false}
        muted
        playsInline
      >
        <source src={transitionSrc} type="video/mp4" />
      </video>
    );
  }

  return (
    <video
      key={currentMode ? "dark" : "light"}
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={currentMode ? "/darkBg.mp4" : "/lightBg.mp4"}
        type="video/mp4"
      />
    </video>
  );
};

export default VideoBackground;
