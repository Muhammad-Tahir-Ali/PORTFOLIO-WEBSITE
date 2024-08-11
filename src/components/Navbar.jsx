import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "process", "projects", "testimonials"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out">

        <div className="w-full overflow-hidden">
          <div className="w-full h-20 flex items-center justify-between px-4 lg:px-40 py-4 text-gray-600">
            <div onClick={()=>{window.location.href = "/"}} className="text-2xl font-bold text-black hover:cursor-pointer">
              Muhmmadtahir.
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="block md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-2xl focus:outline-none text-gray-500"
              >
                &#9776;
              </button>
            </div>

            {/* Sidebar Overlay for mobile */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black opacity-50 z-10"
                onClick={toggleSidebar}
              />
            )}

            {/* Sidebar for mobile */}
            <div
              className={`fixed top-0 right-0 w-2/3 h-full bg-white text-gray-800 transform transition-transform z-20 ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden`}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleSidebar}
                  className="text-2xl text-gray-500 focus:outline-none"
                >
                  &times;
                </button>
              </div>

              <ul className="flex flex-col space-y-6 mt-8 text-lg">
                <li
                  onClick={toggleSidebar}
                  className={`hover:text-blue-500 cursor-pointer py-2 px-4 ${
                    activeSection === "hero" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#hero">Home</a>
                </li>
                <li
                  onClick={toggleSidebar}
                  className={`hover:text-blue-500 cursor-pointer py-2 px-4 ${
                    activeSection === "about" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#about">About Me</a>
                </li>
                <li
                  onClick={toggleSidebar}
                  className={`hover:text-blue-500 cursor-pointer py-2 px-4 ${
                    activeSection === "process" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#process">Process</a>
                </li>
                <li
                  onClick={toggleSidebar}
                  className={`hover:text-blue-500 cursor-pointer py-2 px-4 ${
                    activeSection === "projects" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#projects">Projects</a>
                </li>
                <li
                  onClick={toggleSidebar}
                  className={`hover:text-blue-500 cursor-pointer py-2 px-4 ${
                    activeSection === "testimonials" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#testimonials">Testimonials</a>
                </li>
                {/* Contact Me button inside Sidebar */}
                <li>
                  <button
                    onClick={()=>{window.open('https://wa.me/923471827738', '_blank');} }
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl w-full"
                  >
                    Contact Me
                  </button>
                </li>
              </ul>
            </div>

            {/* Navbar for larger screens */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <ul className="flex space-x-8 text-lg">
                <li
                  className={`hover:text-blue-500 cursor-pointer ${
                    activeSection === "hero" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#hero">Home</a>
                </li>
                <li
                  className={`hover:text-blue-500 cursor-pointer ${
                    activeSection === "about" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#about">About Me</a>
                </li>
                <li
                  className={`hover:text-blue-500 cursor-pointer ${
                    activeSection === "process" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#process">Process</a>
                </li>
                <li
                  className={`hover:text-blue-500 cursor-pointer ${
                    activeSection === "projects" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#projects">Projects</a>
                </li>
                <li
                  className={`hover:text-blue-500 cursor-pointer ${
                    activeSection === "testimonials" ? "text-blue-500" : ""
                  }`}
                >
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>

            {/* Contact Me button for larger screens */}
            <div className="hidden md:flex items-center">
              <button onClick={()=>{window.open('https://wa.me/923471827738', '_blank');}} className="bg-black text-white font-bold py-2 px-4 rounded-2xl transform transition duration-300 ease-in-out hover:bg-blue-500 hover:scale-110 shadow-lg">
              Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Smooth Scrolling CSS */}
        <style jsx="true">{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;
