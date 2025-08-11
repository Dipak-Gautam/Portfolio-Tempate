import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-[#5deade9c]   p-5 px-28 flex gap-5" id="About">
      <div className="p-4 flex flex-1 flex-col justify-center">
        <div className="text-3xl font-bold">
          About{" "}
          <span className="text-[#007f73] dark:text-[#34d3c3] font-bold text-gray-glow">
            Me
          </span>{" "}
        </div>
        <div className="text-2xl font-semibold">
          I'm a{" "}
          <span className="text-[#0e5a52] dark:text-[#34d3c3]">
            Full Stack Developer
          </span>
        </div>
        <div className=" text-lg font-semibold">
          A dedicated Front-End Developer based in Pokhara, Nepal.
        </div>
        <div className="text-justify mt-1 text-sm font-medium">
          As a Front-End Developer. I posses an impressive arsenal of skills in
          HTML, CSS, Java-Script, React, TailWind and React Native. I have
          excellent knowlege in backend also which include Express, NodeJs and
          MongoDB. I excel in designing and maintaining responsive websites that
          offer a smooth user experience. My experties lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utililizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collabrating with cross-functional teams to
          produce outstanding web applications.
        </div>
      </div>
      <div className="w-[40%] flex items-center justify-center">
        <img src="./my/aboutMe.png" alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
