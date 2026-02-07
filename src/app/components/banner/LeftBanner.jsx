"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "React Developer.", "MERN Developer."],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col items-center lgl:items-start text-center lgl:text-left">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        I’m <span className="text-designColor capitalize">Arjun Prajapati</span>
      </h1>

      {/* Typewriter */}
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-200 flex justify-center lgl:justify-start items-center gap-3">
        a <span className="text-white">{text}</span>
        <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#ff49b4" />
      </h2>

      {/* Description */}
      <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl lgl:max-w-2xl leading-7">
        I have approximately 1.5 years of experience building{" "}
        <span className="font-semibold text-white">
          responsive, interactive, and scalable frontend applications
        </span>{" "}
        using React, Next.js, and modern web technologies. My expertise includes
        UI/UX design, component-driven architecture, performance optimization,
        and state management.
      </p>

      {/* Social / Resume Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
