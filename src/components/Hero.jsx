import React from "react";
import HeroImage from "../assets/hero-image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const resumeUrl =
  "https://drive.google.com/file/d/1lSd-PaULdd8YAXcNsaYRsG8DC7Lg3ebm/view?usp=sharing";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r  from-slate-900 to-slate-700 text-white text-center py-16">
      <img
        src={HeroImage}
        alt="sagar barua image"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover object-left-top transform 
        transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-pink-600 to-purple-500"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Sagar Barua
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="flex space-x-4 my-4 md:my-0 max-w-64 mx-auto items-center justify-center">
        <a
          href="https://www.linkedin.com/in/sagarbarua0/"
          className="text-gray-400 hover:text-white "
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SagarBarua1010"
          className="text-gray-400 hover:text-white "
        >
          <FaGithub />
        </a>
      </div>
      <div className="mt-4 space-x-4">
        <a
          href={resumeUrl}
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          View Resume
        </a>
        <a
          href="#contact-me"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
