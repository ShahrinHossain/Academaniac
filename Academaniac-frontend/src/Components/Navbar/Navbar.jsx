import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigateTo = useNavigate();
  return (
    <nav className="nav-container">
      <div
        className="logo-wrapper"
        onClick={() => {
          navigateTo("/");
        }}
      >
        <img src={logo} alt="Academaniac Logo" className="logo" />
        <h4>Academaniac</h4>
      </div>
      <ul>
        <li>
          <button
            className="btn"
            onClick={() => {
              navigateTo("/");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => {
              navigateTo("/about");
            }}
          >
            About Us
          </button>
        </li>
        <li className="contact-item">
          <button
            className="btn"
            onClick={() => {
              navigateTo("/about");
            }}
          >
            Contact
          </button>
          <div className="contact-numbers">
            
            <p>+8801743182053</p>
            <p>
            deadbeefedfrfr@gmail.com
            </p>
          </div>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => {
              navigateTo("/terms");
            }}
          >
            T&Cs
          </button>
        </li>
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
