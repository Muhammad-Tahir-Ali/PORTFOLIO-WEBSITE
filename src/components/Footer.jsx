import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col flex-wrap justify-center pt-20 md:pt-20">
      <div className=" font-serif text-center text-2xl md:text-5xl font-bold text-black leading-tight mb-12 uppercase">
        Interested in working <br /> Togather ?
      </div>
      <div className=" text-center text-lg text-black leading-tight mb-1">
        Drop me a Email at
      </div>
      <div className="text-center text-xl font-bold text-black leading-tight mb-6">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=workwithali786@gmail.com"
          className="text-black hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          workwithali786@gmail.com
        </a>
      </div>

      <hr />
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <div className="flex justify-center space-x-5">
          <a
            className="transition-transform duration-500 transform hover:scale-150"
            href="https://www.facebook.com/profile.php?id=61563302256804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            className="transition-transform duration-500 transform hover:scale-150"
            href="https://www.linkedin.com/in/muhammadtahirexpertwebdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            className="transition-transform duration-500 transform hover:scale-150"
            href="https://github.com/Muhammad-Tahir-Ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/github.png" />
          </a>
          <a
            className="transition-transform duration-500 transform hover:scale-150"
            href="https://wa.me/923471827738"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/whatsapp.png" />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; 2024 Muhammad Tahir. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
