import React, { useEffect, useState } from "react";
import "../dashboard/Dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import Profile from "../dashboard/Profile";
import FindUniContent from "./FindUniContent";

import './FindUniversities.css';

const FindUniversities = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard--content">
        <FindUniContent />
        <Profile />
      </div>
    </div>
  );
};

export default FindUniversities;
