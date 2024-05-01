import React from "react";
import countries from "./countries";

const CountriesDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    // Trigger re-fetch of suggestions here (assuming 'fetchData' is accessible)
    fetchData(input.toLowerCase(), e.target.value); // Replace 'input' with appropriate state/prop
  };

  return (
    <select value={selectedCountry} onChange={handleChange}>
      {countries.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountriesDropdown;
