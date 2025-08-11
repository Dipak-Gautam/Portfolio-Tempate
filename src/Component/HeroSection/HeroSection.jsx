import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div
      className=" h-[80vh] text-2xl font-medium  dark:text-glow-white md:flex items-center p-5 md:px-20 gap-2"
      id="Home"
    >
      <div className="flex justify-center items-center h-full  md:w-[30%]">
        <div className=" shadow-6xl shadow-amber-600  rounded-full overflow-hidden border-4 border-[#046259] ">
          <img src="./my/profileCopy.jpg" className="h-80 w-80 my-auto  " />
        </div>
      </div>
      <div className="md:w-[70%] ">
        <div className="text-2xl font-medium">Hello, Myself</div>
        <h2 className="text-5xl font-bold dark:text-glow-white">
          Dipak Gautam
        </h2>
        <div className="flex gap-2 mt-1">
          <p>And I'm a </p>
          <div className="text-[#007f73] font-bold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "FrontEnd Developer.",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
        <div className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque
          odio iure, aliquam provident porro et asperiores veritatis repudiandae
          aperiam rem nesciunt sit.
        </div>
        <div className="my-6 flex gap-4">
          <a
            href=""
            target="_blank"
            className=" w-11 h-11 flex justify-center items-center border-2 border-[#007f73] rounded-full hover:bg-[#1d978a] text-[#046259] hover:text-white hover:-translate-y-2 transition-all duration-200 ease-in"
          >
            <CiLinkedin className="text-2xl  " />
          </a>

          <a
            href=""
            target="_blank"
            className=" w-11 h-11 flex justify-center items-center border-2 border-[#007f73] rounded-full hover:bg-[#1d978a] text-[#046259] hover:text-white hover:-translate-y-2 transition-all duration-200 ease-in"
          >
            <FaFacebookSquare className="text-2xl  " />
          </a>

          <a
            href=""
            target="_blank"
            className=" w-11 h-11 flex justify-center items-center border-2 border-[#007f73] rounded-full hover:bg-[#1d978a] text-[#046259] hover:text-white hover:-translate-y-2 transition-all duration-200 ease-in"
          >
            <FaSquareGithub className="text-2xl  " />
          </a>

          <a
            href=""
            target="_blank"
            className=" w-11 h-11 flex justify-center items-center border-2 border-[#007f73] rounded-full hover:bg-[#1d978a] text-[#046259] hover:text-white hover:-translate-y-2 transition-all duration-200 ease-in"
          >
            <AiFillInstagram className="text-2xl  " />
          </a>
        </div>
        <a
          href="#About"
          className="bg-[#007f73] p-1 px-5 rounded-3xl text-center w-fit text-white text-base font-medium cursor-pointer hover:bg-[#1bc2b1] hover:shadow-xl shadow-[#007f73] transition-all duration-300 ease-in"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
