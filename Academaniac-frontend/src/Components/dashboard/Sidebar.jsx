// Sidebar.js
import React from "react";
import { BiBookAlt, BiHelpCircle, BiHome , BiMessage, BiStats} from "react-icons/bi";
import { Link } from 'react-router-dom'; // Import Link from React Router
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
          
      </div>

      <div className="menu--list">
        <Link to="/wishlist" className="item">
          <BiHome className="icon"/>
          Wishlist
        </Link>
        <Link to="/records" className="item">
          <BiStats className="icon"/>
          Records
        </Link>
        <Link to="/inbox" className="item">
          <BiMessage className="icon"/>
          Inbox
        </Link>
        <Link to="/help" className="item"> {/* Use Link for navigation */}
          <BiHelpCircle className="icon"/>
          Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
