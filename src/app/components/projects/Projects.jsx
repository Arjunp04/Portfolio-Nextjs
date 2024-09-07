import React from "react";
import Title from "../layouts/Title";
import projectsData from "@/app/data/projectsData";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12 px-12 sml:px-16 md:px-12 mdl:px-16 lg:px-20 xl:px-16">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
