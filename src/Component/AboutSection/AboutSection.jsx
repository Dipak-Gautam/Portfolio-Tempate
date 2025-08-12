import React from "react";
import aboutData from "../../Data/aboutData";

const AboutSection = () => {
  return (
    <div
      className="bg-[#5deade9c] py-10  p-5 md:px-16 lg:px-28 md:flex gap-5"
      id="About"
    >
      <div className="p-4 flex flex-1 flex-col justify-center gap-1.5">
        <div className="text-4xl font-bold">
          About{" "}
          <span className="text-[#007f73] dark:text-[#34d3c3] font-bold text-gray-glow">
            Me
          </span>
          ,
        </div>
        <div className="text-3xl font-semibold">
          I'm a{" "}
          <span className="text-[#05695f] dark:text-[#34d3c3] font-bold">
            {aboutData.title}
          </span>
        </div>
        <div className=" text-xl font-semibold">{aboutData.subTitle}</div>
        <div className="text-justify mt-1 text-xs md:text-sm font-medium">
          {aboutData.description}
        </div>
      </div>
      <div className=" mx-auto w-[40%] flex items-center justify-center">
        <img src={aboutData.image} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
