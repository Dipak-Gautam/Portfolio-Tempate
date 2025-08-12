import React, { useEffect, useState } from "react";

const VideoBackground = ({ darkMode }) => {
  const [videos, setVideos] = useState([
    {
      src: darkMode ? "/darkBg.mp4" : "/lightBg.mp4",
      key: Date.now(),
      opacity: 1,
    },
  ]);

  useEffect(() => {
    const newSrc = darkMode ? "/darkBg.mp4" : "/lightBg.mp4";

    setVideos((prev) => [
      { ...prev[0], opacity: 0 },
      { src: newSrc, key: Date.now(), opacity: 1 },
    ]);

    const cleanup = setTimeout(() => {
      setVideos((prev) => prev.slice(1));
    }, 1000);

    return () => clearTimeout(cleanup);
  }, [darkMode]);

  return (
    <>
      {videos.map((video) => (
        <video
          key={video.key}
          className={`fixed top-0 left-0 w-full h-full object-cover -z-10 transition-opacity duration-500`}
          style={{ opacity: video.opacity }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}
    </>
  );
};

export default VideoBackground;
