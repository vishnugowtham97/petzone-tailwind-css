import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-9/12 mx-auto border border-slate-200"></div>
      </div>
      <div className="flex justify-center relative p-6">
        <div className="font-display text-stone-500 text-3xl px-5 bg-gray-50">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Heading;
