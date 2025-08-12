import React from "react";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <a
      href="https://react-icons.github.io/react-icons/search/#q=link"
      target="_black"
      className="border border-gray-300 hover:shadow-2xl hover:shadow-[#056158] w-72 rounded-xl overflow-hidden "
    >
      <div className="relative">
        <img src="./my/work/foodPokhara.png" alt="" className="w-72 h-56" />
        <a
          href=""
          className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full text-white border border-gray-600 hover:border-white hover:shadow-xl hover:shadow-black/50"
        >
          <FaGithub />
        </a>
      </div>
      <div className="p-2 bg-[#d5fdf9] text-center space-y-1 pb-5">
        <div className="text-gray-800 font-bold text-xl text-glow-gray">
          Food Pokhara
        </div>
        <div className="text-xs text-gray-700 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repudiandae corrupti, dolor odio perspiciatis id nihil architecto,
          voluptates molestiae iusto itaque exercitationem molestias!
        </div>
        <div className="flex gap-2 flex-wrap justify-center text-indigo-500 font-medium text-sm">
          <span>#React</span>
          <span>#Express</span>
          <span>#MongoDB</span>
          <span>#Node js</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
