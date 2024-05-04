import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import CountriesDropdown from "./CountriesDropdown";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTables, setSearchTables] = useState([]);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("all"); // Default to "all"

  const fetchData = (value, country = "all") => {
    let link = `http://universities.hipolabs.com/search?name=${value}&limit=10`;
    if (country !== "all") {
      link += `&country=${country}`;
    }
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
      });
  };

  const fetchData2 = (value) => {
    let link = `http://universities.hipolabs.com/search?name=${value}&limit=500`;

    return fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setSearchTables(json);
        return json; // Return the fetched data
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === "") {
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
    if (input.trim() !== "") {
      const data = await fetchData2(input.toLowerCase());
      const filteredData = selectedCountry === "all" ? data : data.filter((university) => university.country === selectedCountry);
      setResults(filteredData);
    }
    setIsSearchButtonClicked(true); // Set search button clicked state
  };

  return (
    <div className="search-container">
      {/* Heading before the search bar */}
      <h2 className="search-bar-heading">Let's Get Started . . .</h2>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <div className="bundle">
          <input
            placeholder="Type to Search Universities..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <CountriesDropdown className="amriccha" selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
        </div>

        {/* Display options from search results */}
        {searchResults.length > 0 && !isSearchButtonClicked && (
          <ul className="search-results">
            {searchResults.map((option) => (
              <li key={option.id} onClick={() => handleOptionClick(option)}>
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
