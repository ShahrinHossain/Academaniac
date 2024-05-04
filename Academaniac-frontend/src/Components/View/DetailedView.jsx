import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailedView.css";
import { useLocation, useNavigate } from "react-router-dom";

const DetailedView = () => {
  const location = useLocation();
  const passedResult = location.state?.result; // Access result object
  const navigateTo = new useNavigate();

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
      <div className="container-card">
        <h1 className="header-details">Details</h1>
        {/* Display details using passedResult */}
        <p>Name: {passedResult.name}</p>
        <p>Country: {passedResult.country}</p>
        <a className="custom-link" href={passedResult.web_pages[0]}>
          Visit Site
        </a> <br/> <br/>
        <a className="add-to-list" onClick={()=>{
          navigateTo('/login')
        }}>
          Add To List
        </a>
      </div>

      {/* Access other properties similarly */}
    </div>
  );
};

export default DetailedView;
