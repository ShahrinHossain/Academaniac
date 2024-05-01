// import React from "react";
// import "./SearchResultsTable.css";
// import { SearchResult } from "./SearchResult";
// import { useNavigate } from "react-router-dom";

// const SearchResultsTable = ({ results }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="search-results-table">
//       <h2>Search Results</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Country</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((result) => (
//             <tr key={result.id}>
//               <td>{result.name}</td>
//               <td>{result.country}</td>
//               <td>
//                 <button
//                   onClick={() => {
//                     navigate(`/details/`, { state: { result } });
//                   }}
//                 >
//                   View
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SearchResultsTable;
import React from "react";
import "./SearchResultsTable.css";
import { SearchResult } from "./SearchResult";
import { useNavigate } from "react-router-dom";

const SearchResultsTable = ({ results }) => {
  const navigate = useNavigate();

  return (
    <div className="search-results-table">
      
      {results.length > 0 && ( // Only render the table if there are results
        <table>
          <thead> 
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.name}</td>
                <td>{result.country}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/details/`, { state: { result } });
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchResultsTable;
