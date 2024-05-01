import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useLocation } from "react-router-dom";

const DetailedView = () => {
  const location = useLocation();
  const passedResult = location.state?.result; // Access result object

  return (
    <div
      className="container-fluid"
      style={{
        color: "#fff",
        backgroundColor: "#333",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Details</h1>
      {/* Display details using passedResult */}
      <p>Name: {passedResult.name}</p>
      <p>Country: {passedResult.country}</p>
      <a
        className="btn btn-primary"
        href={passedResult.web_pages[0]}
        style={{
          textDecoration: "none",
          margin: "10px 0",
          padding: "10px 20px",
          borderRadius: "5px",
          transition: "all 0.3s",
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          zIndex: "1",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "1px solid #007bff",
        }}
      >
        <span style={{ position: "relative", zIndex: "2" }}>Visit Site</span>
        <span
          style={{
            position: "absolute",
            zIndex: "1",
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            transform: "scale(0)",
            transition: "transform 0.3s",
          }}
        ></span>
      </a>
      {/* Access other properties similarly */}
    </div>
  );
};

export default DetailedView;
