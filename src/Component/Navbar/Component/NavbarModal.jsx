import React from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";

const NavbarModal = ({
  showModal,
  setShowModal,
  scrolled,
  links,
  darkMode,
  setDarkMode,
}) => {
  console.log("links", links);
  return (
    <div
      className={`inset-0 fixed   justify-end ${showModal ? "flex" : "hidden"}`}
      onClick={() => setShowModal(false)}
    >
      <div
        className={` w-[40%] transition-all duration-100 ease-in flex flex-col justify-between  ${
          scrolled
            ? "bg-[#007f739e] backdrop-blur-md shadow-md"
            : "bg-[#007f73]"
        }`}
      >
        <div className="mt-16 flex flex-col gap-1 p-6">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="  font-medium text-gray-200 hover:text-black  hover:text-glow-white py-2 text-xl"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className=" p-6  font-medium text-gray-200 hover:text-white hover:-translate-y-1 hover:text-glow-white text-3xl"
        >
          {!darkMode ? <FaCloudMoon /> : <RiSunFoggyFill />}
        </button>
      </div>
    </div>
  );
};

export default NavbarModal;
