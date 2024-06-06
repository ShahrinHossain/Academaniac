import React, { useEffect, useState } from "react";
import "../dashboard/Dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import Profile from "../dashboard/Profile";
import FindUniContent from "./FindUniContent";
import ViewWishlist from "./ViewWishlist";

import './FindUniversities.css';



const MyWishlist = () => {
    return (
        <div className="dashboard">
          <Sidebar />
    
          <div className="dashboard--content">
            <ViewWishlist />
            <Profile />
          </div>
        </div>
      );
}

export default MyWishlist
