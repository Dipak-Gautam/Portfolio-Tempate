import React from "react";

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
            Full Stack Developer
          </span>
        </div>
        <div className=" text-xl font-semibold">
          A dedicated web Developer based in Pokhara, Nepal.
        </div>
        <div className="text-justify mt-1 text-xs md:text-sm font-medium">
          As a Front-End Developer. I posses an impressive arsenal of skills in
          HTML, CSS, Java-Script, React, TailWind and React Native. I have
          excellent knowledge in backend also which include Express, NodeJs and
          MongoDB. I excel in designing and maintaining responsive websites that
          offer a smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </div>
      </div>
      <div className=" mx-auto w-[40%] flex items-center justify-center">
        <img src="./my/aboutMe.png" alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
