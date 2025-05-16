import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (

    
<footer className="w-full  bg-gray-100 pt-20 flex flex-col bottom-0  relative z-10 overflow-visible">


{/* <!-- ========== Start Black Section ========== --> */}

  {/* Black Banner Section */}
  <div className=" bg-black h-100 text-white overflow-hidden w-[90%] md:w-[70%] rounded-xl p-6 md:p-10 shadow-xl">
    <div className="relative">

      <div className="absolute rotate-20 -bottom-110 hidden sm:block  w-60 overflow-hidden h-50">
        <img className="w-full h-full bg-cover overflow-hidden  bg-center" src="/public/About/FutSolar.webp" alt="" />
      </div>
      <div className="absolute rotate-12 hidden sm:block  -top-20 -right-5 bottom-0  w-60 overflow-hidden h-50">
        <img className="w-full h-full bg-cover overflow-hidden  bg-center" src="/public/About/FutSolar.webp" alt="" />
      </div>
      <div className="flex justify-between items-start gap-10 ">
      {/* Left Side Text */}
      <div className="max-w-xl flex sm:flex-row flex-col  absolute top-0 z-10">
        <p className="text-lg mb-2 ">
          Do you have questions about our services or want to learn more
          about sustainable living?
        </p>
        {/* i need this below text in a single line  */}
        <h1 className="text-[50px]  md:text-[100px] whitespace-nowrap font-semibold leading-none pt-5">GET IN</h1>
      </div>

      {/* Right Side Button */}
      <div className="flex flex-col absolute -bottom-80 right-0 items-start md:items-end z-10">
        <h1 className="text-[60px] md:text-[100px]  font-semibold leading-none">TOUCH</h1>
        <button className="group mt-4 inline-flex items-center bg-blue-400 text-white font-semibold text-lg rounded-full px-6 py-3 transition-all duration-300 hover:bg-white hover:text-blue-950 shadow-lg">
          <span className="transition-all duration-300 group-hover:pr-3">
            View Services
          </span>
          <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 text-xl">
            <MdArrowOutward />
          </span>
        </button>
      </div>
    </div>
    </div>
  </div>
    
{/* <!-- ========== End Black Section ========== --> */}

{/* <!-- ========== Start Footer content Section ========== --> */}
  {/* Footer Content */}
  <div className="flex flex-col  sm:flex-row w-[90%] mx-auto justify-between items-center px-4 pt-10 pb-10 space-y-6 sm:space-y-0">
    {/* Navigation Links */}
    <nav className="w-full sm:w-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 text-sm sm:text-base font-semibold text-gray-700 text-center sm:text-left">
        <li><Link to="/home" className="hover:text-blue-600 transition">Home</Link></li>
        <li><Link to="/project" className="hover:text-blue-600 transition">Project</Link></li>
        <li><Link to="/service" className="hover:text-blue-600 transition">Service</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        <li><Link to="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
        <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy</Link></li>
        <li><Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
        <li><Link to="/404" className="hover:text-blue-600 transition">Not Found 404</Link></li>
      </ul>
    </nav>

    {/* Social Icons */}
    <div className="flex flex-col items-center  pt-10 gap-4">
      <div className="flex gap-4">
        <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-700 text-xl hover:bg-gray-700 hover:text-white rounded-full"><FaTwitter /></span>
        <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-700 text-xl hover:bg-gray-700 hover:text-white rounded-full"><FaFacebookSquare /></span>
        <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-700 text-xl hover:bg-gray-700 hover:text-white rounded-full"><FaInstagram /></span>
        <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-700 text-xl hover:bg-gray-700 hover:text-white rounded-full"><FaGithub /></span>
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-600 text-center">
        © 2025 Pentaclay. All rights reserved.
      </p>
    </div>
  </div>

{/* <!-- ========== End Footer content Section ========== --> */}






</footer>

  );
};

export default Footer;
