import React from "react";
import { LuArrowUpRight } from 'react-icons/lu';

import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/project", label: "Project" },
    { to: "/service", label: "Service" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
    { to: "/privacy", label: "Privacy" },
    { to: "/faq", label: "FAQ" },
    { to: "/pagenotfound", label: "Not Found 404" },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaFacebookSquare />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaGithub />, name: "Github" },
  ];
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
              <h1 className="text-[50px] md:text-[100px] font-semibold md:leading-none">TOUCH</h1>
              <Link
                to="/contact"
                className="group flex items-center cursor-pointer !m-1  "
              >
                {/* Text Button */}
                <button className="!m-0 flex items-center cursor-pointer gap-2 px-8 py-4 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
                  View Services
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
        </div>
      </div>

      {/* <!-- ========== End Black Section ========== --> */}

      {/* <!-- ========== Start Footer content Section ========== --> */}
      {/* Footer Content */}
      <div className="flex flex-col  sm:flex-row w-[90%] mx-auto justify-between items-center px-4 pt-10 pb-10 space-y-6 sm:space-y-0">
        {/* Navigation Links */}
        <nav className="w-full sm:w-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 text-sm sm:text-base font-semibold text-gray-700 text-center sm:text-left">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-blue-600 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}

        <div className="flex flex-col items-center pt-10 gap-4">
          <div className="flex gap-4">
            {socialIcons.map((item, index) => (
              <span
                key={index}
                className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-700 text-xl hover:bg-gray-700 hover:text-white rounded-full"
                aria-label={item.name}
              >
                {item.icon}
              </span>
            ))}
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
