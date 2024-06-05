
// // import React, { useState } from "react";
// // import "./Navbar.css";
// // import logo from "../../assets/logo.png";
// // import { useNavigate } from "react-router-dom";
// // import { BiPhone, BiEnvelope } from "react-icons/bi";

// // export const Navbar = () => {
// //   const navigateTo = useNavigate();

// //   const handleProgramClick = (route) => {
// //     navigateTo(route);
// //   };

// //   return (
// //     <nav className="nav-container">
// //       <div
// //         className="logo-wrapper"
// //         onClick={() => {
// //           navigateTo("/");
// //         }}
// //       >
// //         <img src={logo} alt="Academaniac Logo" className="logo" />
// //         <h4>Academaniac</h4>
// //       </div>
// //       <ul>
// //         <li>
// //           <button
// //             className="btn"
// //             onClick={() => {
// //               navigateTo("/");
// //             }}
// //           >
// //             Home
// //           </button>
// //         </li>
// //         <li className="program">
// //           <button className="btn">Programs</button>
// //           <div className="programs">
// //             <p onClick={() => handleProgramClick("/about")}>Find Perfect University</p>
// //             <p onClick={() => handleProgramClick("/about")}>Letter of intent tips</p>
// //           </div>
// //         </li>
// //         <li>
// //           <button
// //             className="btn"
// //             onClick={() => {
// //               navigateTo("/about");
// //             }}
// //           >
// //             About Us
// //           </button>
// //         </li>
// //         <li className="contact-item">
// //           <button
// //             className="btn"
// //             onClick={() => {
// //               navigateTo("/");
// //             }}
// //           >
// //             Contact
// //           </button>
// //           <div className="contact-numbers">
// //             <p>
// //               <BiPhone /> +8801743182053
// //             </p>
// //             <p>
// //               <BiEnvelope /> deadbeefedfrfr@gmail.com
// //             </p>
// //           </div>
// //         </li>
// //         <li>
// //           <button
// //             className="btn"
// //             onClick={() => {
// //               navigateTo("/terms");
// //             }}
// //           >
// //             T&Cs
// //           </button>
// //         </li>
// //         <li>
// //           <button
// //             className="btn"
// //             onClick={() => {
// //               navigateTo("/login");
// //             }}
// //           >
// //             Login
// //           </button>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BiPhone, BiEnvelope } from "react-icons/bi";

export const Navbar = () => {
  const navigateTo = useNavigate();
  const [showPrograms, setShowPrograms] = useState(false);

  const handleProgramClick = (route) => {
    navigateTo(route);
  };

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
        <li className="program">
          <button className="btn" onClick={() => setShowPrograms(!showPrograms)}>
            Programs
          </button>
          {showPrograms && (
            <div className="programs">
              <p
                onClick={() => handleProgramClick("/login")}
                className="dropdown-item"
              >
                Find your university
              </p>
              <p
                onClick={() => handleProgramClick("/sop")}
                className="dropdown-item"
              >
                SOP writing
              </p>
              <p
                onClick={() => handleProgramClick("/cv")}
                className="dropdown-item"
              >
                CV writing
              </p>
            </div>
          )}
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
              navigateTo("/");
            }}
          >
            Contact
          </button>
          <div className="contact-numbers">
            <p>
              <BiPhone /> +8801743182053
            </p>
            <p>
              <BiEnvelope /> deadbeefedfrfr@gmail.com
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


