import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailedView.css";
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
      <h1 className="header-details">Details</h1>
      {/* Display details using passedResult */}
      <p>Name: {passedResult.name}</p>
      <p>Country: {passedResult.country}</p>
      <a
  className="custom-link"
  href={passedResult.web_pages[0]}
>
  Visit Site

      </a>
      {/* Access other properties similarly */}
    </div>
  );
};

export default DetailedView;
