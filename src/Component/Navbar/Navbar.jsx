import React, { useState, useEffect } from "react";

const links = ["Home", "About", "Project", "Contact"];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`sticky top-0 z-50 flex justify-center w-full gap-5 p-2 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {links.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="bg-gray-400 hover:bg-gray-600 p-1 px-2 text-sm font-medium text-white rounded-md"
        >
          {item}
        </a>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-red-500 text-white p-2 border rounded-md"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
