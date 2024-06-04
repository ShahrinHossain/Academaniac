import React from "react";
import { BiBookAlt, BiHelpCircle, BiHome , BiMessage, BiStats} from "react-icons/bi";
import "./Sidebar.css"

const Sidebar = () => {
  return <div className="menu">
    <div className="logo">
        
    </div>

    <div className="menu--list">
        <a href="#" className="item">
            <BiHome className="icon"/>
            Wishlist
        </a>
        <a href="#" className="item">
            <BiStats className="icon"/>
            Records
        </a>
        <a href="#" className="item">
            <BiMessage className="icon"/>
            Inbox
        </a>
        <a href="#" className="item">
            <BiHelpCircle className="icon"/>
            Help
        </a>
        
    </div>

    </div>
  
};

export default Sidebar;

