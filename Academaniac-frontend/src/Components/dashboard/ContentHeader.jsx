import React from "react";
import {BiNotification, BiSearch} from 'react-icons/bi';
import "./Content.css"

const ContentHeader = () => {
  return(

   <div className="content--header">
      <h4 className="header--title">Dashboard</h4>
        <div className="header--activity">
          <div className="search-box">
    <input type="text" placeholder="Search"/>
    <BiSearch className="icon" />
    </div>
    <div className="notify-box">
    <BiNotification className="icon" />
  </div>
    </div>
  </div>
  
  );
  
};

export default ContentHeader;
