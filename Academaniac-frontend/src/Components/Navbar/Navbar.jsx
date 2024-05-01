import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="Academaniac Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
