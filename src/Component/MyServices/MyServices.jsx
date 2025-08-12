import React from "react";
import { FaCode } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ImAndroid } from "react-icons/im";

const MyServices = () => {
  return (
    <div className=" my-10 ">
      <div className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#007F73]">Services</span>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]">
          <FaCode className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">Web Development</div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            perspiciatis, ut consequuntur, at quia quod maxime repellendus id
            necessitatibus illum beatae! Error aut ea quo?
          </div>
        </div>
        <div className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]">
          <IoColorPaletteOutline className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">UI/UX Design</div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            perspiciatis, ut consequuntur, at quia quod maxime repellendus id
            necessitatibus illum beatae! Error aut ea quo?
          </div>
        </div>
        <div className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]">
          <ImAndroid className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">App Development</div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            perspiciatis, ut consequuntur, at quia quod maxime repellendus id
            necessitatibus illum beatae! Error aut ea quo?
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
