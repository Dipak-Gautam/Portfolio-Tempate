import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="md:px-20 p-5 md:p-16" id="Contact">
      <div className="bg-[#badfe7] flex rounded-xl overflow-hidden gap-6 items-center">
        <div className="flex-1 p-16  flex flex-col">
          <div className="text-indigo-600 text-xl font-medium">
            What can I do for you?
          </div>
          <div className="text-sm font-medium text-gray-500">
            Feel free to contact me
          </div>

          <div className="text-3xl font-semibold text-gray-700 my-3">
            Contact Me Now
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="text-4xl text-[#007F73]">
                <FaMapMarkedAlt />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-800">
                  Location
                </div>
                <div className="text-sm font-medium text-gray-700">
                  AmmarDeep Pokhara,Nepal
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl text-[#007F73]">
                <FaPhoneAlt />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-800">
                  Phone Number
                </div>
                <div className="text-sm font-medium text-gray-700">
                  +977 98000000
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-4xl text-[#007F73]">
                <IoMdMail />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-800">EMail </div>
                <div className="text-sm font-medium text-gray-700">
                  anjangautam095@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#007F73] p-2 text-sm px-4 rounded-md w-fit text-white font-semibold mt-5 hover:shadow-md shadow-[#007F73] cursor-pointer">
            Let's talk
          </div>
        </div>
        <div className=" hidden md:flex w-[50%] h-full">
          <img src="./contactMe.jpeg" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
