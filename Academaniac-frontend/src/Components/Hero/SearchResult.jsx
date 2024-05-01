import React from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  // Define a function to handle the click event
  const handleClick = () => {
    console.log(result.name); // Log the name to the console
    // window.location.href = "/details/" + result.name;
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {result.name}
    </div>
  );
};
