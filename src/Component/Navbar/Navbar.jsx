import React from "react";

const links = ["Home", "About", "Project", "Contact"];

const Navbar = () => {
  return (
    <div className="fixed bg-transparent flex justify-center w-full gap-5 p-2">
      {links.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="bg-gray-400 hover:bg-gray-600 p-1 px-2 text-sm font-medium text-white  rounded-md"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
