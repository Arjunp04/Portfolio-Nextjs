import React from "react";
import { FaLinkedinIn, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";

const Media = () => {
  const iconClass =
    "w-16 h-16 flex justify-center items-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300 text-white";

  return (
    <div className="flex flex-row gap-20 justify-center lgl:justify-start items-center mt-6">
      {/* Social Links */}
      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor text-center lgl:text-left">
          Find me here
        </h2>
        <div className="flex gap-6">
          <a
            href="https://github.com/Arjunp04/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <FaGithub size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
          >
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </div>

      {/* Resume Download */}
      <div className="flex flex-col items-center lgl:items-start">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor text-center lgl:text-left">
          My Resume
        </h2>
        <a
          href={process.env.NEXT_PUBLIC_RESUME_DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
        >
          <FaCloudDownloadAlt size={34} />
        </a>
      </div>
    </div>
  );
};

export default Media;
