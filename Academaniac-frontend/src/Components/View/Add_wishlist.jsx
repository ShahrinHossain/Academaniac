import React, { useEffect, useState } from "react";
import "../dashboard/Dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import Profile from "../dashboard/Profile";
import Wishlist from "./Wishlist";

import './FindUniversities.css';

const Add_wishlist = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard--content">
        <Wishlist />
        <Profile />
      </div>
    </div>
  );
};

export default Add_wishlist;
