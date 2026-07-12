import React from "react";
import bannerImg from "../../assets/arjun.jpg";
import Image from "next/image";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-[45%] flex justify-center items-center relative lgl:ml-14">
      <div className="absolute w-56 h-56 lgl:w-[420px] lgl:h-[520px] rounded-full lgl:rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500 to-purple-700 opacity-30 blur-2xl  z-0"></div>{" "}
      {/* Profile Image */}
      <div className="relative">
        <Image
          className="w-52 h-52 lgl:w-[400px] lgl:h-[550px] xl:h-[500px] rounded-full lgl:rounded-2xl object-cover max-lgl:object-top shadow-2xl transition-transform duration-500 hover:scale-105 z-10"
          src={bannerImg}
          alt="Arjun Prajapati"
          priority
        />
      </div>
    </div>
  );
};

export default RightBanner;
