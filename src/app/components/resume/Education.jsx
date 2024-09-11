import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 px-5 md:px-10 lg:px-20"
    >
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold text-white">Education Quality</h2> */}
        </div>
        <div className="mt-6 lgl:mt-0 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Electronics and Communication Engineering (ECE)"
            subTitle="Indian Institute of Information Technology  Nagpur (2020 - 2024)"
            result="7.81 / 10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Junior College"
            subTitle="Pace Junior Science College (2017 - 2019)"
            result="81.84 %"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          {/* <ResumeCard
            title="School Education"
            subTitle="ShantiNagar High School (2007 - 2017)"
            result="91.00 %"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
