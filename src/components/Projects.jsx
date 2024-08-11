import React from "react";
import Card from "./card";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import { motion } from "framer-motion";

const Projects = () => {
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
      <div className="w-full md:pb-16 md:px-20 ">
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <Card
              title="Nike Product E-commerce Website"
              subtitle="React.js , Next.js, Tailwind CSS, and more"
              description=" Built with React JS and Tailwind CSS and many integrated libraries.Multiple Pages, Interactive Elements (Add to Cart System, Sign In/Sign Up).Fully responsive layout for all devices across various browsers. "
              imageUrl={img1}
              link="https://nike-product-website-react-tailwind.vercel.app/"
              linkText="Visit Website"
              textColor="text-red-500"
            />
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card
              title="Cuex"
              subtitle="React.js , Next.js, Tailwind CSS"
              description="The Most Powerful Money Exchange Services in the World.it is a long established fact that a reader will be distracted by the reale he point of using Lorem Ipsum is that it has a more or less normal valid equity."
              imageUrl={img9}
              link="https://cuex-currency-converter.netlify.app/"
              linkText="Visit Website"
              textColor="text-green-500"
            />
          </motion.div>
          <motion.div
             initial={{ y: 200, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card
              title="Restuarant Site"
              subtitle="React.js , Next.js, Tailwind CSS, and more"
              description="Built with React JS and Tailwind CSS. Multiple Pages, Interactive Elements (Add to Cart System, Sign In/Sign Up).Fully responsive layout ensuring compatibility across various devices and screen sizes."
              imageUrl={img2}
              link="https://food-ordering-restaurant-app-react-qgop.vercel.app/"
              linkText="Visit Website"
              textColor="text-orange-500"
            />
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <Card
              title="Book your oil change"
              subtitle="React.js , Next.js, Tailwind CSS"
              description="Your Ultimate Car Care Destination.Discover the secrets to a smoother ride! From routine upkeep to pro tips, our site offers comprehensive guidance on car maintenance, ensuring your vehicle stays in peak condition"
              imageUrl={img8}
              link="https://cargarageservices.netlify.app/"
              linkText="Visit Website"
              textColor="text-blue-500"
            />
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card
              title="Hydra"
              subtitle="React.js , Next.js, Tailwind CSS"
              description="Dive Into The Depths of Virtual Reality. A fully Functional website that show you the details of the VR. It is a long established fact that a reader will be distracted by the reale he point of using VR."
              imageUrl={img7}
              link="https://hydra-by-sania.netlify.app/"
              linkText="Visit Website"
              textColor="text-indigo-500"
            />
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card
              title="Weahther App"
              subtitle="React.js , Next.js, Tailwind CSS,  Api integration and more"
              description="This app provides accurate, real-time weather updates, forecasts, and more, ensuring you're always one step ahead of the elements. 🌞🌨️🌈✨.Real-time weather updates 🌍-  User-friendly interface 📱"
              imageUrl={img3}
              link="https://weatherapp-gray-one.vercel.app/"
              linkText="Visit Website"
              textColor="text-purple-500"
            />
          </motion.div>
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
          <span className="text-3xl md:text-5xl font-bold text-white">
            100%
          </span>
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

export default Projects;
