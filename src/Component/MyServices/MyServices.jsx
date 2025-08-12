import React from "react";
import { FaCode } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ImAndroid } from "react-icons/im";
import myServiceData from "../../Data/myServiceData";

const MyServices = () => {
  return (
    <div className=" my-10 ">
      <div className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#007F73]">Services</span>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]"
        >
          <FaCode className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">
            {myServiceData.firstHeading}
          </div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            {myServiceData.firstDescription}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]"
        >
          <IoColorPaletteOutline className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">
            {myServiceData.secondHeading}
          </div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            {myServiceData.secondDescription}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-[#d5fdf9] p-5 py-8 w-72  rounded-2xl flex flex-col items-center gap-4 border-3  border-[#d5fdf9] hover:border-[#007F73]  hover:shadow-2xl shadow-[#007F73]"
        >
          <ImAndroid className="text-[#007F73] text-5xl" />
          <div className="text-2xl text-black font-bold">
            {myServiceData.thirdHeading}
          </div>
          <div className="text-xs font-medium mt-1 text-justify text-gray-900">
            {myServiceData.thirdDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
