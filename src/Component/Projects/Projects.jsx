import React from "react";
import ProjectCard from "./Component/ProjectCard";
import workData from "../../Data/workData";

const Projects = () => {
  return (
    <div className="py-10 p-5 bg-[#5deade9c] md:px-24" id="Project">
      <div className="text-center">
        <p className="text-xs font-medium">My Works</p>
        <p className="text-[#007F73] dark:text-[#1be7d2] font-bold text-4xl">
          Projects.
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-10 flex-wrap">
        {workData.map((item, index) => (
          <ProjectCard key={item.projectName} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
