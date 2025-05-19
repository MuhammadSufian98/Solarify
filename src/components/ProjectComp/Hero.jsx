import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full :min-h-screen bg-white">
      <div className="w-[70%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 items-center lg:items-start max-w-2xl">
          <h1 className="text-3xl text-center sm:text-[100px]  font-bold text-gray-900 leading-tight">
            OUR <span className="">PROJECTS.</span>
          </h1>

          <p className="text-lg text-left font-semibold text-gray-600 max-w-sm">
            Advanced design boosts the efficiency of the solar cells by
            reducing energy loss and enhancing light absorption.
          </p>

          <button className="group cursor-pointer inline-flex items-center bg-blue-500 text-white font-semibold text-lg rounded-full px-6 py-3 transition-all duration-300 hover:bg-white hover:text-blue-900 border-2 border-blue-500 shadow-lg">
            <span className="transition-all duration-300 group-hover:pr-3">
              Contact Now
            </span>
            <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 text-xl">
              <MdArrowOutward />
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full sm:w-80 flex-shrink-0">
          <img
            className="w-full h-auto rounded-xl"
            src="/About/hero.avif"
            alt="About Solarify"
          />

          {/* Rotating div with circular text and background image */}
          <div className="absolute top-40 -left-10 rounded-full p-1 border border-gray-400 animate-spin">
            <div className="relative w-10 h-10 sm:w-24 sm:h-24 rounded-full bg-[url('/About/rotating1.jpg')] bg-cover bg-center shadow-md">
              <svg
                viewBox="0 0 100 100"
                className="absolute top-0 left-0 w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text fill="" fontSize="15" fontWeight="600">
                  <textPath href="#circlePath" startOffset="5%">
                    best.agency.explorer.best.agency
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
