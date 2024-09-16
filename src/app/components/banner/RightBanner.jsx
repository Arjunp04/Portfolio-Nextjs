import React from "react";
import bannerImg  from "../../assets/arjun.jpg";
import Image from "next/image";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-[45%] flex justify-center items-center relative lgl:ml-14 ">
      <Image
        className="w-[350px] h-[380px] lgl:w-[400px] lgl:h-[550px] xl:w-[450px] xl:h-[550px] z-10 object-cover rounded-md md:mt-8"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[380px] lgl:w-[405px] lgl:h-[555px] xl:w-[455px] xl:h-[555px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
