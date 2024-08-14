import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="w-full pt-20 lg:pt-32 pb-10 md:px-40 overflow-auto">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Heading Section */}
        <div className="mb-12">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            ABOUT ME
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="mb-12">
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            As a skilled frontend developer, I specialize in creating visually
            stunning, responsive websites that not only look great but also
            drive business growth. By combining modern design principles with
            cutting-edge technologies like HTML, CSS, JavaScript, and React, I
            craft user-friendly interfaces that enhance customer engagement and
            improve conversion rates.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: .7 }}
          >
            Let's work together to bring your vision to life and grow your
            business online.
          </motion.p>
        </div>

        {/* Bullet Points Section */}
        <div className="flex flex-wrap justify-between">
          {/* Strategy Column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Strategy
            </motion.h3>
            <motion.ul
              className="text-gray-700"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <li className="mb-2">Brand Building</li>
              <li className="mb-2">Marketing</li>
              <li className="mb-2">Communications</li>
            </motion.ul>
          </div>

          {/* Skills Column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              My Skills
            </motion.h3>
            <motion.ul
              className="text-gray-700"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <li className="mb-2">React JS</li>
              <li className="mb-2">Next JS</li>
              <li className="mb-2">Tailwind CSS</li>
              <li className="mb-2">JavaScript</li>
            </motion.ul>
          </div>

          {/* Advice Column */}
          <div className="w-full md:w-1/3">
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-4"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay:1.5 }}
            >
              Advice
            </motion.h3>
            <motion.ul
              className="text-gray-700"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <li className="mb-2">Change Management</li>
              <li className="mb-2">Process Management</li>
              <li className="mb-2">Organizational Development</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
