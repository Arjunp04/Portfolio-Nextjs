import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import contactImg from "../../assets/circle.png";
import Image from "next/image";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 md:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      {/* <Image
        className="w-full h-64 md:h-96 mdl:h-[450px] lg:h-80 lg:w-96 lgl:w-full lgl:h-72 object-cove rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      /> */}
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Arjun Ramesh Prajapati</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaPhoneAlt className="shrink-0 text-xl"/> <span className="text-lightText">+91 8879564472</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 text-wrap">
          <MdMailOutline className="shrink-0 text-xl"/><span className="text-lightText">arjunprajapati4102001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-0 text-designColor">
          Find me here
        </h2>
        <div className="flex gap-4 ">
          <a
            href="https://github.com/Arjunp04/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
