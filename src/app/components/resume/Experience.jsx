"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/app/data/projectsData";
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";

const Experience = () => {
  // Highlight <hl>text</hl> inside strings
  const renderHighlightText = useCallback((text) => {
    return text.split(/(<hl>.*?<\/hl>)/g).map((part, i) => {
      if (part.startsWith("<hl>")) {
        return (
          <span key={i} className="font-medium text-white">
            {part.replace("<hl>", "").replace("</hl>", "")}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 flex flex-col gap-10 mx-6 md:mx-12 lg:mx-20"
    >
      {experienceData.map((job, index) => (
        <div
          key={index}
          className="relative bg-black/50 rounded-xl p-6 sml:p-8 shadow-shadowOne border-l-4 border-designColor"
        >
          {/* ================= HEADER ================= */}
          <div className="flex flex-col sml:flex-row sml:items-start sml:justify-between gap-2">
            {/* ===== For small screens: flex-col with two divs ===== */}
            <div className="flex flex-col sm:hidden gap-2 w-full">
              {/* 1st div: Position */}
              <div className="flex items-center gap-2.5">
                <FaBriefcase className="text-designColor text-lg sml:text-xl shrink-0" />
                <h2 className="text-xl sml:text-2xl font-bold text-white leading-none">
                  {job.position}
                </h2>
              </div>

              {/* 2nd div: Timeline + Location */}
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <HiOutlineCalendar className="shrink-0" />
                  <span>{job.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <HiOutlineLocationMarker className="shrink-0" />
                  <span>{job.location || "India"}</span>
                </div>
              </div>
            </div>

            {/* ===== For desktop & larger screens ===== */}
            <div className="hidden sm:flex flex-col sml:flex-row sml:items-start sml:justify-between gap-2 w-full">
              {/* Left */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <FaBriefcase className="text-designColor text-lg sml:text-xl shrink-0" />
                  <h2 className="text-xl sml:text-2xl font-bold text-white leading-none">
                    {job.position}
                  </h2>
                </div>
                <p className="text-designColor font-medium mt-1">
                  {job.company}
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-2 sml:gap-2 text-gray-400 text-sm sml:items-end">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <HiOutlineCalendar className="shrink-0" />
                  <span>{job.timeline}</span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <HiOutlineLocationMarker className="shrink-0" />
                  <span>{job.location || "India"}</span>
                </div>
              </div>
            </div>

            {/* ===== Company Name for small screens ===== */}
            <div className="sm:hidden mt-2 text-designColor font-medium">
              {job.company}
            </div>
          </div>

          {/* ================= SUMMARY =================
          <p className="text-gray-400 mt-3 max-w-3xl">
            {job.summary ||
              "Contributed to building production-ready features and improving overall user experience across multiple modules."}
          </p> */}

          {/* ================= HIGHLIGHTS ================= */}
          <h3 className="mt-4 font-semibold text-white">Key Highlights:</h3>

          <ul className="mt-3 space-y-2">
            {job.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-designColor" />
                <p className="leading-relaxed">{renderHighlightText(item)}</p>
              </li>
            ))}
          </ul>

          {/* ================= TECH STACK ================= */}
          <div className="flex flex-wrap gap-3 mt-6">
            {job.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full bg-black/50 text-sm text-gray-300 shadow-shadowOne"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;
