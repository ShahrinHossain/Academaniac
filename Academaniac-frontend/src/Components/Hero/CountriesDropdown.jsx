import React from "react";
import countries from "./countries";

const CountriesDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
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
