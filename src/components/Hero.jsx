import React, { useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import img from "../assets/img.png";
import {motion} from "framer-motion"

const Hero = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: [
        'CREATIVE WEB ````DEVELOPER',
        'INNOVATIVE FRONTEND DEVELOPER',
        'EXPERT SOFTWARE ENGINEER',
        'DEDICATED WEB DESIGNER'
      ],
      autoStart: true,
      loop: true,
      delay: 50, // Adjust typing speed if needed
      pauseFor: 2000 // Pause between texts
    });
  }, []);

  return (
    <>
      <div className="w-full pt-20 overflow-hidden">
        <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center p-6 lg:p-10 px-10 lg:px-40">
          {/* Image Section */}
          <motion.div className="w-full flex justify-center md:justify-start mt-6 md:mt-0"
           initial={{ x:-200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0 }}
          >
            <img
              src={img}
              alt="Hero"
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div className="text-center md:text-left md:w-full md:ml-10 mt-6 md:mt-0"
           initial={{ x: 200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5, delay: 0 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span id="typewriter" ref={typewriterRef} />
            </h1>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              I'm a Front end Creative Web Developer & Software Engineer based
              in Sialkot, Pakistan. Providing the best development services for
              your next projects.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300">
              <a
                href="https://drive.google.com/file/d/1IG5QzDtbxkv4pcwij7Yr6h-1OX34tLVF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download My Resume
              </a>
            </button>
            <div className="mt-6 flex items-center justify-center md:justify-start">
              <span className="text-2xl font-bold text-blue-500">✔</span>
              <span className="ml-2 text-base font-medium">
                100% Work completion on time.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
