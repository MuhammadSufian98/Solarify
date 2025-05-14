import React from "react";
import { FaTwitter, FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-sm relative bottom z-50">
      <div className="flex flex-col sm:flex-row w-[90%] mx-auto justify-between items-center px-4 py-8 space-y-6 sm:space-y-0">
        {/* Navigation Links */}
        <nav className="w-full sm:w-auto">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm sm:text-base font-semibold text-gray-700 text-center sm:text-left">
            <li>
              <Link to="/home" className="cursor-pointer hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="cursor-pointer hover:text-gray-400 transition">
                Project
              </Link>
            </li>
            <li>
              <Link to="/service" className="cursor-pointer hover:text-gray-400 transition">
                Service
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-gray-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer hover:text-gray-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="cursor-pointer hover:text-gray-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="cursor-pointer hover:text-gray-400 transition">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/faq" className="cursor-pointer hover:text-gray-400 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/404" className="cursor-pointer hover:text-gray-400 transition">
                Not Found 404
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-400 text-xl hover:bg-gray-700 hover:text-white rounded-full">
              <FaTwitter />
            </span>
            <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-400 text-xl hover:bg-gray-700 hover:text-white rounded-full">
              <FaFacebookSquare />
            </span>
            <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-400 text-xl hover:bg-gray-700 hover:text-white rounded-full">
              <FaInstagram />
            </span>
            <span className="p-3 border border-gray-300 transition duration-300 cursor-pointer text-gray-400 text-xl hover:bg-gray-700 hover:text-white rounded-full">
              <FaGithub />
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 text-center">
            © 2025 Pentaclay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
