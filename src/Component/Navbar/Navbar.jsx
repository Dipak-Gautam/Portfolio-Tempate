import React, { useState, useEffect } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import NavbarModal from "./Component/NavbarModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const links = ["Home", "About", "Project", "Contact"];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-50 flex justify-between w-full gap-5 p-2 transition-all duration-300 items-center px-5 md:px-20 ${
          scrolled
            ? "bg-[#007f739e] backdrop-blur-md shadow-md"
            : "bg-[#007f73]"
        }`}
      >
        <div className="font-bold text-3xl text-white ">Dipak Gautam</div>

        <div className=" hidden md:flex items-center gap-6">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="  font-medium text-gray-200 hover:text-white hover:-translate-y-1 hover:text-glow-white"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="  font-medium text-gray-200 hover:text-white hover:-translate-y-1 hover:text-glow-white text-2xl"
          >
            {!darkMode ? <FaCloudMoon /> : <RiSunFoggyFill />}
          </button>
        </div>
        <div className="flex md:hidden text-2xl  font-medium text-gray-200 hover:text-white hover:text-glow-white">
          {!showModal ? (
            <GiHamburgerMenu onClick={() => setShowModal(true)} />
          ) : (
            <IoCloseSharp onClick={() => setShowModal(false)} />
          )}
        </div>
      </div>
      <NavbarModal
        showModal={showModal}
        setShowModal={setShowModal}
        scrolled={scrolled}
        links={links}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>
  );
};

export default Navbar;
