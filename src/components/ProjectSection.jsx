import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Nike Product E-commerce Website",
      subtitle: "React.js , Next.js, Tailwind CSS, and more",
      description:
        "Built with React JS and Tailwind CSS and many integrated libraries. Multiple Pages, Interactive Elements (Add to Cart System, Sign In/Sign Up). Fully responsive layout for all devices across various browsers.",
      imageUrl: img1,
      link: "https://nike-product-website-react-tailwind.vercel.app/",
      linkText: "Visit Website",
      textColor: "text-red-500",
    },
    {
      title: "Cuex",
      subtitle: "React.js , Next.js, Tailwind CSS",
      description:
        "The Most Powerful Money Exchange Services in the World. It is a long established fact that a reader will be distracted by the real point of using Lorem Ipsum is that it has a more or less normal valid equity.",
      imageUrl: img9,
      link: "https://cuex-currency-converter.netlify.app/",
      linkText: "Visit Website",
      textColor: "text-green-500",
    },
    {
      title: "Restaurant Site",
      subtitle: "React.js , Next.js, Tailwind CSS, and more",
      description:
        "Built with React JS and Tailwind CSS. Multiple Pages, Interactive Elements (Add to Cart System, Sign In/Sign Up). Fully responsive layout ensuring compatibility across various devices and screen sizes.",
      imageUrl: img2,
      link: "https://food-ordering-restaurant-app-react-qgop.vercel.app/",
      linkText: "Visit Website",
      textColor: "text-orange-500",
    },
    {
      title: "Book your oil change",
      subtitle: "React.js , Next.js, Tailwind CSS",
      description:
        "Your Ultimate Car Care Destination. Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition.",
      imageUrl: img8,
      link: "https://cargarageservices.netlify.app/",
      linkText: "Visit Website",
      textColor: "text-blue-500",
    },
    {
      title: "Hydra",
      subtitle: "React.js , Next.js, Tailwind CSS",
      description:
        "Dive Into The Depths of Virtual Reality. A fully Functional website that show you the details of the VR. It is a long established fact that a reader will be distracted by the real point of using VR.",
      imageUrl: img7,
      link: "https://hydra-by-sania.netlify.app/",
      linkText: "Visit Website",
      textColor: "text-indigo-500",
    },
    {
      title: "Weather App",
      subtitle: "React.js , Next.js, Tailwind CSS, Api integration and more",
      description:
        "This app provides accurate, real-time weather updates, forecasts, and more, ensuring best experience 🌞🌨️🌈✨. Real-time weather updates 🌍-  User-friendly interface 📱",
      imageUrl: img3,
      link: "https://weatherapp-gray-one.vercel.app/",
      linkText: "Visit Website",
      textColor: "text-purple-500",
    },
  ];

  return (
    <>
      <div className="text-center text-3xl md:text-4xl font-bold text-gray-900 leading-tight p-8 pt-24 md:px-40">
        <motion.p
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          Take a view of my Latest projects
        </motion.p>
      </div>
      <div className="w-full md:pb-16 md:px-20">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="w-full transition-transform duration-500 transform hover:scale-105 gap-10">
                <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                  <div className="order-1 sm:ml-6 xl:ml-0">
                    <h3 className="mb-1 text-slate-900 font-semibold">
                      <span
                        className={`mb-1 block text-sm leading-6 ${project.textColor}`}
                      >
                        {project.subtitle}
                      </span>
                      {project.title}
                    </h3>
                    <div className="prose prose-slate prose-sm text-slate-600">
                      <p>{project.description}</p>
                    </div>
                    <a
                      className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-blue-500 text-white hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText}
                      <span className="sr-only">, {project.title}</span>
                      <svg
                        className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0L3 3L0 6" />
                      </svg>
                    </a>
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="mb-6 shadow-lg rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                    width="1216"
                    height="640"
                  />
                </li>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
      <div className="flex justify-around items-center w-full h-[100px] bg-red-500 py-4 pt">
        <div className="flex flex-wrap items-center mx-4">
          <span className="text-3xl md:text-5xl font-bold text-white">35</span>
          <p className="text-sm text-gray-100">
            &nbsp;&nbsp;&nbsp;&nbsp;Projects Completed
          </p>
        </div>
        <div className="flex flex-wrap items-center mx-4">
          <span className="text-3xl md:text-5xl font-bold text-white">100%</span>
          <p className="text-sm text-gray-100">
            &nbsp;&nbsp;&nbsp;&nbsp;Client Satisfaction
          </p>
        </div>
        <div className="flex flex-wrap items-center mx-4">
          <span className="text-3xl md:text-5xl font-bold text-white">11</span>
          <p className="text-sm text-gray-100 ">
            &nbsp;&nbsp;&nbsp;&nbsp;Ongoing Projects
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
