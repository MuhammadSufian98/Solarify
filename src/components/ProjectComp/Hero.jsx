import React from "react";
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full :min-h-screen bg-white">
      <div className="w-[70%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-6 items-center text-center max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-[100px] font-bold text-gray-900">
            OUR <span className="">PROJECTS.</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            Advanced design boosts the efficiency of the solar cells by
            reducing energy loss and enhancing light absorption.
          </p>

          <Link
            to="/contact"
            className="group flex flex-col sm:flex-row items-center justify-center gap-0 cursor-pointer"
          >
            <Link
              to="/contact"
              className="group flex flex-col sm:flex-row items-center justify-center gap-0 cursor-pointer"
            >
              {/* Text Button */}
              <button className="flex items-center gap-2 px-6 py-3 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300 cursor-pointer">
                Contact Now
              </button>

              {/* Icon Button (Only show on md and above) */}
              <button className="hidden md:flex relative w-12 h-12 bg-[#6761db] text-white rounded-full overflow-hidden items-center justify-center group-hover:bg-[#0a0a2f] transition duration-300 cursor-pointer">
                {/* First Icon: Moves up-right */}
                <span className="absolute transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-7">
                  <LuArrowUpRight size={24} />
                </span>

                {/* Second Icon: Comes in from bottom-left */}
                <span className="absolute text-white transition-transform duration-500 ease-out translate-x-[-1.2rem] translate-y-[1.5rem] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <LuArrowUpRight size={24} />
                </span>
              </button>
            </Link>

          </Link>

        </div>


        {/* Right Image */}
        <div className="relative w-full sm:w-80 flex-shrink-0">
          <img
            className="w-full h-auto rounded-xl"
            src="/About/hero.avif"
            alt="About Solarify"
          />

          {/* Rotating div with circular text and background image */}
          <div className="absolute top-40 -left-8 md:-left-10 rounded-full p-1 border border-gray-400 animate-spin">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[url('/About/rotating1.jpg')] bg-cover bg-center shadow-md">
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
