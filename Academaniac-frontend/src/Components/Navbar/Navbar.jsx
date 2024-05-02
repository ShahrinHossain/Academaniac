import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="nav-container">
      <img src={logo} alt="Academaniac Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>
          <button
            className="btn"
            onClick={() => {
              navigateTo("/login");
            }}
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
