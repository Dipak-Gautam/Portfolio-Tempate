import React from "react";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({ data, index }) => {
  return (
    <a
      data-aos="fade-up"
      data-aos-delay={`${index * 100}`}
      href={data.projectLink}
      target="_blank"
      className="border border-gray-300 hover:shadow-2xl hover:shadow-[#056158] w-72 rounded-xl overflow-hidden "
    >
      <div className="relative">
        <img src={data.image} alt="" className="w-72 h-56" />
        <a
          href={data.gitHubLink}
          target="_blank"
          className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full text-white border border-gray-600 hover:border-white hover:shadow-xl hover:shadow-black/50"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub />
        </a>
      </div>
      <div className="p-2 bg-[#d5fdf9] text-center space-y-1 pb-5">
        <div className="text-gray-800 font-bold text-xl text-glow-gray">
          {data.projectName}
        </div>
        <div className="text-xs text-gray-700 font-medium">
          {data.projectDescription}
        </div>
        <div className="flex gap-2 leading-3 my-2 flex-wrap justify-center text-indigo-500 font-medium text-sm">
          {data.tags.map((item) => (
            <span key={item}>#{item}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
