import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTables, setSearchTables] = useState([]);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);


  const fetchData = (value) => {
    let link = `http://universities.hipolabs.com/search?name=${value}&limit=10`;
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
      setSearchResults([]); // Clear search results when input is empty
    } else {
      fetchData(value.toLowerCase());
      setIsSearchButtonClicked(false);
    }
  };

  const handleOptionClick = (option) => {
    setInput(option.name);
    setSearchResults([]); // Clear search results after selecting an option
    setResults([option]); // Set selected option as the result
  };

  const handleSubmit = async () => {
    if (input.trim() !== "") {
      const data = await fetchData2(input.toLowerCase());
      setResults(data);
    }
    setResults(searchTables); // Assuming 'searchTables' holds the full results
    setIsSearchButtonClicked(true); // Set search button clicked state
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
  );
};

export default SearchBar;
