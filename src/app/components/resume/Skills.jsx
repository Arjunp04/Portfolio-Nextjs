import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiPostman,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-400 text-6xl xl:text-7xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-6xl xl:text-7xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-6xl xl:text-7xl" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600 text-6xl xl:text-7xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-600 text-6xl xl:text-7xl" />,
  },
  {
    name: "Git",
    icon: <FaGit className="text-red-500 text-6xl xl:text-7xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-6xl xl:text-7xl" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-600 text-6xl xl:text-7xl" />,
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full pt-12 px-5 md:px-20 lg:px-16"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-x-1 md:grid-cols-4 mdl:grid-cols-5 lg:grid-cols-6 mt-8 md:mt-12 max-w-80 md:max-w-[450px] mdl:max-w-[600px] lg:max-w-[800px] mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {skill.icon}
            <p className="text-sm text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
