import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/app/data/projectsData"; // Assuming you have experienceData here

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-8 ml-8 md:mx-10 lg:mx-20"
    >
      {/* Internship Information */}
      <div className="w-full">
        <h2 className="text-3xl font-bold text-white">Internship</h2>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-xl font-semibold text-designColor">
            {experienceData.position} at {experienceData.company}
          </p>
          <p className="text-sm text-gray-400">{experienceData.timeline}</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="w-full pr-6">
        <h3 className="text-2xl font-semibold text-white">Tech Stack</h3>
        <ul className="mt-5 flex flex-wrap gap-4 text-sm text-gray-300">
          {experienceData.techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-black bg-opacity-25 px-4 py-2 rounded-lg shadow-shadowOne"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Experience */}
      <div className="w-full mt-4">
        <h3 className="text-2xl font-semibold text-white">Projects</h3>
        <div className="mt-6 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.des.map((project, index) => (
            <div key={index} className="w-full group flex">
              <div className="w-6 md:w-10 h-[6px] bgOpacity mt-10 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                  <span className="w-3 h-3 rounded-full bg-designColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
              </div>
              <div className="w-[82%] md:w-[90%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-6 md:px-8 lgl:px-10 flex flex-col justify-center gap-3 shadow-shadowOne">
                <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl max-w-[600px] font-semibold text-gray-300 group-hover:text-white duration-300">
                      {project.project}
                    </h3>
                  </div>
                </div>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-400 group-hover:text-gray-300 duration-300">
                  {project.description?.map((descItem, index) => (
                    <li key={index} className="mb-0.5">
                      {descItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
