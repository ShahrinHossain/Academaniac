import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = (value) => {
    let link =
      `http://universities.hipolabs.com/search?name=` + value + `&limit=10`;
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        setSearchResults(json);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() !== "") {
      fetchData(value.toLowerCase());
    } else {
      setSearchResults([]);
    }
  };

  const handleOptionClick = (option) => {
    setInput(option.name);
    setSearchResults([]);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to Search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* Display options from search results */}
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
