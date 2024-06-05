import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import SearchBar from "./SearchBar";
import SearchResultsTable from "./SearchResultsTable";

const Hero = () => {
  const [results, setResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();  // Updated to use useNavigate

  const handleViewButtonClick = () => {
    if (selectedOption) {
      window.location.href = selectedOption.web_pages;
    }
  };

  const handleDirectoryButtonClick = (country) => {
    navigate(`/scholarships/${country}`);  // Updated to use navigate
  };

  return (
    <div className="hero-container">
      <div className="scholarships">
        <h4 className="schol-title">Best Scholarships 2024</h4>
        <button
          className="directory-button1"
          onClick={() => handleDirectoryButtonClick("america")}
        >
          United States
        </button>
        <button
          className="directory-button2"
          onClick={() => handleDirectoryButtonClick("australia")}
        >
          Australia
        </button>
        <button
          className="directory-button3"
          onClick={() => handleDirectoryButtonClick("germany")}
        >
          Germany
        </button>
        <button
          className="directory-button4"
          onClick={() => handleDirectoryButtonClick("canada")}
        >
          Canada
        </button>
        <button
          className="directory-button5"
          onClick={() => handleDirectoryButtonClick("japan")}
        >
          Japan
        </button>
      </div>
      <div className="hero-text">
        <SearchBar setResults={setResults} setSelectedOption={setSelectedOption} />
        <SearchResultsTable results={results} />
        {selectedOption && (
          <button className="view-button" onClick={handleViewButtonClick}>
            View {selectedOption.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
