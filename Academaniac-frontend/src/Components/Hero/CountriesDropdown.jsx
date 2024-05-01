// import React from "react";
// import countries from "./countries";

// const CountriesDropdown = ({ selectedCountry, setSelectedCountry }) => {
//   const handleChange = (e) => {
//     setSelectedCountry(e.target.value);
//     // Trigger re-fetch of suggestions here (assuming 'fetchData' is accessible)
//     fetchData(input.toLowerCase(), e.target.value); // Replace 'input' with appropriate state/prop
//   };

//   return (
//     <select value={selectedCountry} onChange={handleChange}>
//       {countries.map((country, index) => (
//         <option key={index} value={country}>
//           {country}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CountriesDropdown;

import React from "react";
import countries from "./countries";

const CountriesDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    // Trigger re-fetch of suggestions here (assuming 'fetchData' is accessible)
    fetchData(input.toLowerCase(), e.target.value); // Replace 'input' with appropriate state/prop
  };

  return (
    <div className="amriccha">
      <select
  value={selectedCountry}
  onChange={handleChange}
  style={{
    width: "150px",
    height: "35px",
    backgroundColor: "#b7cbca",
    padding: "10px 15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "small",
  }}
>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountriesDropdown;
