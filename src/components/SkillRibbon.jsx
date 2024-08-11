import React from "react";
import { motion } from "framer-motion";

const SkillRibbon = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-auto pt-10">
        <div className="relative">
          {/* Background Skew */}
          <div className="absolute top-0 left-0 w-full h-full bg-black transform -skew-y-[-3deg]"></div>
          
          {/* Content Container */}
          <div className="relative bg-red-500 px-4 py-6 lg:py-8 lg:px-5 flex flex-wrap justify-around text-white font-bold text-lg md:text-xl lg:text-2xl transform skew-y-[-4deg]">
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; WordPress
            </span>
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; HTML
            </span>
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; ReactJS
            </span>
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; NodeJS
            </span>
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; CSS
            </span>
            <span className="flex items-center my-2 mx-4 whitespace-nowrap">
              <i className="hexagon-icon mr-2"></i> &#10004; Shopify
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillRibbon;
