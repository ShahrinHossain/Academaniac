import React, { useState } from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const Hero = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your Ultimate Study Abroad Guide</h1> <br />
        <br />
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
};

export default Hero;
