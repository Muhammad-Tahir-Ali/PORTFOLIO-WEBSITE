import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center text-4xl font-bold text-blue-700 leading-tight mb-12 uppercase">
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          what my clients are saying
        </motion.p>
      </div>
        <motion.ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}

        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8 transition-transform duration-500 transform hover:scale-105">
              <li>
                <figure className="relative rounded-2xl bg-blue-700 p-6 shadow-xl shadow-slate-900/10">
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-white">
                    Muhammad exceeded our expectations with a sleek, professional website. His innovative approach led to increased traffic and conversions. A top-notch developer!
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-white">Sheryl Berge</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: 'transparent' }}
                        src="https://randomuser.me/api/portraits/men/15.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>

          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8 transition-transform duration-500 transform hover:scale-105 ">
              <li>
                <figure className="relative rounded-2xl bg-blue-700 p-6 shadow-xl shadow-slate-900/10">
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-white">
                    Muhammad transformed our website with a modern, responsive design that boosted our engagement. His attention to detail and professionalism were outstanding. Highly recommended!
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-white">Amy Klassen</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: 'transparent' }}
                        src="https://randomuser.me/api/portraits/women/18.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>

          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8 transition-transform duration-500 transform hover:scale-105">
              <li>
                <figure className="relative rounded-2xl bg-blue-700 p-6 shadow-xl shadow-slate-900/10">
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight text-white">
                    "Muhammad delivered a fantastic website that perfectly matched our brand. His expertise and timely execution made the process smooth and successful."
                    </p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-white">Tommy Adams</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img
                        alt=""
                        className="h-14 w-14 object-cover"
                        style={{ color: 'transparent' }}
                        src="https://randomuser.me/api/portraits/men/13.jpg"
                      />
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Testimonials;
