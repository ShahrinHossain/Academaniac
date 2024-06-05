import React, { useState } from "react";
import "../dashboard/Dashboard.css";
import Sidebar from "../dashboard/Sidebar";
import FindUniContent from "./FindUniContent";

const FindUniversities = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <FindUniContent />
      </div>
    </div>
  );
};

export default FindUniversities;
