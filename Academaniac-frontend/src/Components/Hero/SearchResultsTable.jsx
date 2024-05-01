// import React from "react";
// import "./SearchResultsTable.css";
// import { SearchResult } from "./SearchResult";

// const SearchResultsTable = ({ results }) => {
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
//                   onClick={() => (
//                     (window.location.href = result.web_pages[0]),
//                     console.log(result.web_pages)
//                   )}
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
import { useNavigate } from "react-router-dom";

const SearchResultsTable = ({ results }) => {
  const navigateTo = useNavigate(); // Get history object

  return (
    <div className="search-results-table">
      <h2>Search Results</h2>
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
                  // onClick={() => (navigteTo(`/details`), console.log(result))}
                  onClick={() =>
                    navigateTo(`/details`, {
                      state: { result },
                    })
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsTable;
