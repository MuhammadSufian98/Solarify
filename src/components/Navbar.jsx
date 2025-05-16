import { useState } from "react";
import "./Navbar.css";
import logo from "/logo-removebg-preview.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#" className="NavLink">
            Home
          </a>
          <a href="#" className="NavLink">
            About
          </a>
          <a href="#" className="NavLink">
            Blog
          </a>
          <a href="#" className="NavLink">
            Pages
          </a>
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
