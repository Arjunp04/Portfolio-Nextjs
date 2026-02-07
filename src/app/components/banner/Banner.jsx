import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col-reverse lgl:flex-row items-center px-10 pt-16 pb-20 gap-10"
    >
      {/* Mobile: RightBanner first, then LeftBanner */}
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
