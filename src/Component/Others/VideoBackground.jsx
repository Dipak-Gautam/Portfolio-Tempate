import React from "react";

const VideoBackground = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/background.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
