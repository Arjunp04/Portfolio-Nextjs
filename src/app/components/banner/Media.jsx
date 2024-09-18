import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-row gap-x-14 lgl:gap-24 gap-y-5 mx-auto lgl:mx-0">
      <div className="">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor text-center">
          Find me here
        </h2>
        <div className="flex gap-6 justify-center w-40">
          <a
            href="https://github.com/Arjunp04/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>
      </div>
      <div className="">
        <h2 className="text-base uppercase font-titleFont mb-4 text-designColor">
          My Resume
        </h2>
        <div className="flex gap-4 justify-center w-[105px]">
          <a
            href="https://drive.google.com/file/d/1ISjMvpkY5dybLLVzICidFDxiKYMDcKgo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaCloudDownloadAlt size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
