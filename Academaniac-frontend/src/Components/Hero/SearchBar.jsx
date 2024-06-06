import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import CountriesDropdown from "./CountriesDropdown";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("all"); // Default to "all"

  const fetchData = (value, country = "all") => {
    let link = `http://universities.hipolabs.com/search?limit=10`;
    if (value.trim() !== "") {
      link += `&name=${value}`;
    }
    if (country !== "all") {
      link += `&country=${country}`;
    }
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
      });
  };

  const fetchData2 = (value, country = "all") => {
    let link = `http://universities.hipolabs.com/search?limit=500`;
    if (value.trim() !== "") {
      link += `&name=${value}`;
    }
    if (country !== "all") {
      link += `&country=${country}`;
    }
    return fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
        return json; // Return the fetched data
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "" && selectedCountry === "all") {
      setSearchResults([]);
    } else {
      fetchData(value.toLowerCase(), selectedCountry); // Pass country if available
    }
    setIsSearchButtonClicked(false);
  };

  const handleOptionClick = (option) => {
    setIsSearchButtonClicked(false);
    setInput(option.name);
    setSearchResults([]); // Clear search results after selecting an option
    setResults([option]); // Set selected option as the result
  };

  const handleSubmit = async () => {
    const data = await fetchData2(input.toLowerCase(), selectedCountry);
    setResults(data);
    setIsSearchButtonClicked(true); // Set search button clicked state
  };

  return (
    <div className="search-container">
      {/* Heading before the search bar */}
      <h4 className="search-bar-heading">Looking for universities?</h4>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <div className="bundle">
          <input
            placeholder="Search universities by name & country..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <CountriesDropdown className="amriccha" selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
        </div>

        {/* Display options from search results */}
        {searchResults.length > 0 && !isSearchButtonClicked && (
          <ul className="search-results">
            {searchResults.map((option) => (
              <li key={option.web_pages[0]} onClick={() => handleOptionClick(option)}>
                {option.name}
              </li>
            ))}
          </ul>
        )}
        {/* Submit button */}
        <button className="submit-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
