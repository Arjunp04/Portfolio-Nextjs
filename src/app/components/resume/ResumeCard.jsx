import React from "react";

const ResumeCard = ({ title, subTitle, result }) => {
  return (
    <div
      className="
        relative
        bg-black bg-opacity-40
        rounded-xl
        p-6 md:p-8
        shadow-shadowOne
        border-l-4 border-designColor
        flex flex-col gap-4
      "
    >
      {/* Header Row */}
      <div className="flex flex-col mdl:flex-row justify-between gap-3 mdl:items-center">
        {/* Left */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm mt-1 text-gray-400">{subTitle}</p>
        </div>

        {/* Right Badge */}
        <span
          className="
            px-4 py-1
            rounded-full
            bg-black bg-opacity-50
            text-sm
            text-designColor
            shadow-shadowOne
            w-fit
          "
        >
          {result}
        </span>
      </div>
    </div>
  );
};

export default ResumeCard;
