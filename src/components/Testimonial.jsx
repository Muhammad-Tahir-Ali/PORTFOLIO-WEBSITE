import React from "react";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-20">
      <div className="text-center text-4xl font-bold text-blue-500 leading-tight mb-12 uppercase">
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          what my clients are saying
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <TestimonialCard
                  articleTitle="Muhammad exceeded our expectations with a sleek, professional website. His innovative approach led to increased traffic and conversions. A top-notch developer!"
                  authorName="Sarah Lee"
                  authorImage={img4}
                  authorLink="https://example.com/author"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <TestimonialCard
                  articleTitle="Muhammad transformed our website with a modern, responsive design that boosted our engagement. His attention to detail and professionalism were outstanding. Highly recommended!"
                  authorName="John Doe"
                  authorImage={img5}
                  authorLink="https://example.com/author"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <TestimonialCard
                  articleTitle="Muhammad delivered a fantastic website that perfectly matched our brand. His expertise and timely execution made the process smooth and successful."
                  authorName="Danial Smith"
                  authorImage={img6}
                  authorLink="https://example.com/author"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
