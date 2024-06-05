// import React, { useState } from "react";
// import "./Hero.css";
// import SearchBar from "./SearchBar";
// import SearchResultsList from "./SearchResultsList";
// import SearchResultsTable from "./SearchResultsTable";

// const Hero = () => {
//   const [results, setResults] = useState([]);
//   const [searchBarContent, setSearchBarContent] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleViewButtonClick = () => {
//     // Handle the action when the "View" button is clicked
//     if (selectedOption) {
//       // console.log("View button clicked for: ", selectedOption.name);
//       console.log("gg");
//       window.location.href = selectedOption.web_pages;
//       // Perform any desired action, such as navigation or displaying additional information
//     }
//   };

//   return (
//     <div className="hero-container">
//       {/* <div className="Scholarships"> Scholarships</div> */}
//       <div className="hero-text">
        
//         <SearchBar
//           setResults={setResults}
//           setSelectedOption={setSelectedOption}
//         />

//         <SearchResultsTable results={results} />

//         {/* Display the "View" button if an option is selected */}
//         {selectedOption && (
//           <button className="view-button" onClick={handleViewButtonClick}>
//             View {selectedOption.name}
//           </button>
//         )}
//       </div>

//       <div className="scholarships"> Scholarships</div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState } from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";
import SearchResultsTable from "./SearchResultsTable";

const Hero = () => {
  const [results, setResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleViewButtonClick = () => {
    if (selectedOption) {
      window.location.href = selectedOption.web_pages;
    }
  };

  return (
    <div className="hero-container">
      <div className="scholarships">
        <h4 className="schol-title">Best Scholarships 2024</h4>
        <button className="directory-button1" onClick={() => window.location.href = "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/"}>
          United States
        </button>
        <button className="directory-button2" onClick={() => window.location.href = "https://www.scholars4dev.com/category/country/australia-scholarships/"}>
          Australia
        </button>
        <button className="directory-button3" onClick={() => window.location.href = "https://www.scholars4dev.com/category/country/europe-scholarships/germany-scholarships/"}>
          Germany
        </button>
        <button className="directory-button4" onClick={() => window.location.href = "https://www.scholarshipregion.com/category/scholarships/scholarships-in-canada/"}>
          Canada
        </button>
        <button className="directory-button5" onClick={() => window.location.href = "https://opportunitiespedia.com/top-10-scholarships-in-japan-2024/"}>
          Japan
        </button>
        {/* Add more buttons as needed */}
      </div>
      <div className="hero-text">
        
        <SearchBar setResults={setResults} setSelectedOption={setSelectedOption} />
        <SearchResultsTable results={results} />
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
