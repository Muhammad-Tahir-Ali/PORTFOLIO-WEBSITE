import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBullhorn, FaCode } from 'react-icons/fa'; 

const WorkingProcess = () => {
  return (
    <>
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0 }}
    >
    <div className="w-full bg-gradient-to-r from-gray-900 to-black h-auto px-4 md:px-8 lg:px-40 py-24">
      <div className="w-full text-center mb-8">
        <motion.h1 className="text-3xl md:text-4xl font-bold text-white leading-tight"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}>
          WORKING PROCESS
        </motion.h1>
        <div className="h-1 w-[30%] bg-blue-500 mx-auto mt-3 transition-transform transform hover:scale-110 hover:w-[40%]"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-auto flex flex-col text-white">
          <div className="flex items-center mb-8 mt-4">
            <FaSearch className="text-blue-500 text-3xl md:text-4xl mr-3" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1 transition-transform transform hover:scale-105">
                Research
              </h3>
            </div>
          </div>
          <div className="flex items-center mb-8 mt-10">
            <FaBullhorn className="text-blue-500 text-3xl md:text-4xl mr-3" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1 transition-transform transform hover:scale-105">
                Strategy
              </h3>
            </div>
          </div>
          <div className="flex items-center mb-8 mt-10">
            <FaCode className="text-blue-500 text-3xl md:text-4xl mr-3" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1 transition-transform transform hover:scale-105">
                Development
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto flex flex-col text-white mt-8 md:mt-0 md:ml-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
            <p className="text-xs md:text-sm">
              Begin by gathering all necessary information and requirements from stakeholders or clients. Collect relevant tools, technologies, and data needed for the project.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
            
            <p className="text-xs md:text-sm">
              Develop a detailed project plan, including timelines and milestones. Set clear objectives and goals that the project aims to achieve.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
            <p className="text-xs md:text-sm">
              Write and develop the code based on the defined project plan and design. Continuously test and debug the code to ensure it meets the project requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default WorkingProcess;
