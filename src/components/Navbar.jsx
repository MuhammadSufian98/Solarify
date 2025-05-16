import { useState } from "react";
import "./Navbar.css";
import logo from "/logo-removebg-preview.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  // <!-- ========== UseStates ========== -->
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBlog, setisBlog] = useState(false);
  const [ispage, setispage] = useState(false);
  // <!-- =========UseStates ========== -->

  // <!-- ========== Functions ========== -->
  const showBlog = () => {
    setisBlog(true);
  };
  const HideBlog = () => {
    setisBlog(false);
  };
  const showPage = () => {
    setispage(true);
  };
  const HidePage = () => {
    setispage(false);
  };

  // <!-- =========Functions ========== -->

  return (
    <div className="navbarMain">
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="30" height="30" viewBox="0 0 100 80" fill="#0c0c3c">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>

        <div className={`navLinksDiv ${menuOpen ? "showMenu" : ""}`}>
          <Link to="" className="font-bold ">
            Home
          </Link>
          <Link className="font-bold " to="/about">
            About
          </Link>
          <Link
            className="font-bold relative "
            to="/blog"
            onMouseEnter={showBlog}
            onMouseLeave={HideBlog}
          >
            Blog
            {isBlog && (
              <div className="absolute z-50 bg-white -left-15 top-5 shadow-md px-10 py-3  ">
                <ul className=" text-md font-smeibold">
                  <li className="py-2">
                    <Link
                      className="hover:text-blue-300 transition duration-200"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="whitespace-nowrap hover:text-blue-300 transition duration-200"
                      to="/blogdetails"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Link>
          <Link
            to=""
            className="font-bold relative  "
            onMouseEnter={showPage}
            onMouseLeave={HidePage}
          >
            Pages
            {ispage && (
              <div className="absolute -left-15 z-50 bg-white top-5 shadow-md px-5   py-6  ">
                <ul className=" text-md  font-smeibold">
                  <li className="py-2">
                    <Link
                      className="hover:text-blue-300  transition duration-200"
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="whitespace-nowrap hover:text-blue-300 transition duration-200"
                      to="/servicesDetails"
                    >
                      Services Details
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="hover:text-blue-300 transition duration-200"
                      to="/project"
                    >
                      Project
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="whitespace-nowrap hover:text-blue-300 transition duration-200"
                      to="/projectDetail"
                    >
                      Project Details
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="hover:text-blue-300 transition duration-200"
                      to="/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="whitespace-nowrap hover:text-blue-300 transition duration-200"
                      to="/privacy"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="hover:text-blue-300 transition duration-200"
                      to="/terms"
                    >
                      Terms
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      className="whitespace-nowrap hover:text-blue-300 transition duration-200"
                      to="/notFound"
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Link>

          <button
            className={`navContactBTN ${
              menuOpen ? "displayNone" : "displayBlock"
            }`}
          >
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
