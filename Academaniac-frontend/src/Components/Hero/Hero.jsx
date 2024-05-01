import React, { useState } from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import SearchResultsTable from "./SearchResultsTable";

const Hero = () => {
  const [results, setResults] = useState([]);
  const [searchBarContent, setSearchBarContent] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleViewButtonClick = () => {
    // Handle the action when the "View" button is clicked
    if (selectedOption) {
      // console.log("View button clicked for: ", selectedOption.name);
      console.log("gg");
      window.location.href = selectedOption.web_pages;
      // Perform any desired action, such as navigation or displaying additional information
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Your Ultimate Study Abroad Guide</h1>
        <SearchBar
          setResults={setResults}
          setSelectedOption={setSelectedOption}
        />

        <SearchResultsTable results={results} />

        {/* Display the "View" button if an option is selected */}
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
