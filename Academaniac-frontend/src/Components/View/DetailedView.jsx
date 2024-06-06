import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailedView.css";
import { useLocation, useNavigate } from "react-router-dom";

const DetailedView = () => {
  const location = useLocation();
  const passedResult = location.state?.result; // Access result object
  const scrapedData = location.state?.scrapedData; // Access scraped data
  const imageData = location.state?.imageData; // Access image data
  const navigateTo = useNavigate(); // Use useNavigate directly

  return (
    <div className="container-fluid">
      <div className="container-card">
        {/* Display details using passedResult */}
        <p>{passedResult.name}</p>
        <p>Country: {passedResult.country}</p>
        <button className="btn btn-success visit-site-btn" onClick={() => window.open(passedResult.web_pages[0], "_blank")}>
          Visit Site
        </button> <br/> <br/>
        {/* Display scraped data */}
        {scrapedData && (
          <div className="ashol-data">
            <p>{scrapedData.research_text}</p>
          </div>
        )}
        {/* Display scraped images */}
        {imageData && imageData.length > 0 && (
          <div className="image-gallery">
            {imageData.map((url, index) => (
              url && <img key={index} src={url} alt={`University Image ${index}`} className="university-image" />
            ))}
          </div>
        )}
        <button className="btn btn-success add-to-list-btn" onClick={() => navigateTo('/login')}>
          Add To List
        </button>
      </div>
    </div>
  );
};

export default DetailedView;
