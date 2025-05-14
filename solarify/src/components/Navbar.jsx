import "./Navbar.css";
import logo from "../assets/logo-removebg-preview.png";

export default function Navbar() {
  return (
    <div className="navbarMian">
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navLinksDiv">
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
        </div>
        <div className="navContactDiv">
          <button className="navContactBTN">Contact Now</button>
        </div>
      </div>
    </div>
  );
}
