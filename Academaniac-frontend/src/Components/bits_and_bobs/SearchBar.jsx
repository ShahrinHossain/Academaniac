// import React, { useState } from "react";
// import "./SearchBar.css";

// function SearchBar({ placeholder, data }) {
//   const [filterWordData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");
//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//     // console.log(searchWord);
//   };

//   return (
//     <div>
//       <div>
//         <div className="form">
//           <i className="fa fa-search"></i>
//           <input
//             type="text"
//             placeholder={placeholder}
//             className="form-control form-input"
//             value={wordEntered}
//             onChange={handleFilter}
//           />
//           <span className="left-pan">
//             <i className="fa fa-microphone"></i>
//           </span>
//         </div>
//         {filterWordData.length !== 0 && (
//           <div className="dataResult">
//             {filterWordData.slice(0, 15).map((value, index) => {
//               return (
//                 <div className="list border-bottom" key={index}>
//                   <div className="d-flex flex-column ml-3">
//                     <span>{value.name}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filterWordData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleClick = (value) => {
    setWordEntered(value.name); // Set the selected option as the input value
    setFilteredData([]); // Clear the filtered options
  };

  return (
    <div>
      <div>
        <div className="form">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder={placeholder}
            className="form-control form-input"
            value={wordEntered}
            onChange={handleFilter}
          />
          <span className="left-pan">
            <i className="fa fa-microphone"></i>
          </span>
        </div>
        {filterWordData.length !== 0 && (
          <div className="dataResult">
            {filterWordData.slice(0, 15).map((value, index) => {
              return (
                <div className="list border-bottom" key={index} onClick={() => handleClick(value)}>
                  <div className="d-flex flex-column ml-3">
                    <span>{value.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
