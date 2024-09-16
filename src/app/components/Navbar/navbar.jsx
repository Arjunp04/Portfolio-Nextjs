"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdMailOutline } from "react-icons/md";
import {
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { navLinksdata } from "./navlinks.js";
import logo from "../../assets/logo.jpeg";
import Image from "next/image.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-20 pr-6 pl-4 lg:px-10 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <Image
          alt="logo"
          src={logo}
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-8 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-medium text-gray-50 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        <div
          className={`fixed top-0 left-0 w-[80%] sml:w-[70%] h-screen bg-[#080808] p-4 transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500`}
        >
          <div className="flex flex-col gap-8 py-2 relative">
            <div>
              <Image className="w-32" src={logo} alt="logo" />
              <h4 className="text-xl mt-5 font-bold text-white">
                Arjun Ramesh Prajapati
              </h4>
              <p className="text-sm text-gray-100 mt-2">
                MERN STACK DEVELOPER
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2 mt-2 hover:text-white">
                <FaPhoneAlt className="shrink-0 text-md" />{" "}
                <span className="text-lightText hover:text-white">
                  +91 8879564472
                </span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2 text-wrap mt-2 hover:text-white">
                <MdMailOutline className="shrink-0 text-md" />
                <span className="text-lightText hover:text-white">
                  prajapatiarjun4147@gmail.com
                </span>
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-0 text-designColor">
                Find me here
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Arjunp04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaGithub size={27}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-prajapati-4ba91b285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bannerIcon"
                >
                  <FaLinkedinIn size={27}/>
                </a>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-100 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
