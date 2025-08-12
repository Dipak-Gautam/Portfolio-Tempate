import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#007F73] p-5 md:px-20 flex items-center justify-between">
      <div className=" flex gap-2 ">
        <a
          href=""
          target="_blank"
          className="  flex justify-center items-center border-2 border-[#007f73] rounded-full  text-white  transition-all duration-200 ease-in"
        >
          <CiLinkedin className="text-3xl  " />
        </a>

        <a
          href=""
          target="_blank"
          className="  flex justify-center items-center border-2 border-[#007f73] rounded-full  text-white  transition-all duration-200 ease-in"
        >
          <FaFacebookSquare className="text-2xl  " />
        </a>

        <a
          href=""
          target="_blank"
          className="  flex justify-center items-center border-2 border-[#007f73] rounded-full  text-white  transition-all duration-200 ease-in"
        >
          <FaSquareGithub className="text-2xl  " />
        </a>

        <a
          href=""
          target="_blank"
          className="  flex justify-center items-center border-2 border-[#007f73] rounded-full  text-white  transition-all duration-200 ease-in"
        >
          <AiFillInstagram className="text-2xl  " />
        </a>
      </div>
      <div className="text-xs font-medium text-white">
        © Dipak Gautam - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
