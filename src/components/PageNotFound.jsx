import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 space-y-10 md:space-y-0 md:space-x-12">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/public/pagenotfound.svg"
          alt="404 Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Text & Button */}
      <div className="md:w-1/2 w-full text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0C0C3C]">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#0C0C3C]">
          Page not found
        </h2>
        <Link
          to="/contact"
          className="group flex items-center cursor-pointer !mt-4 justify-center "
        >
          {/* Text Button */}
          <button className="!m-0 flex items-center cursor-pointer gap-2 px-8 py-4 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
            Back to Home
          </button>

          {/* Icon Button with Animating Arrows */}
          <button className="!m-0 relative w-12 h-12 cursor-pointer bg-[#6761db] text-white rounded-full overflow-hidden flex items-center justify-center group-hover:bg-[#0a0a2f] transition duration-300">

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
      </div>
    </div>
  );
};

export default PageNotFound;
