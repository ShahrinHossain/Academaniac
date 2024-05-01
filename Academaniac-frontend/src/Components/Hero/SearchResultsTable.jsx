import React from "react";
import "./SearchResultsTable.css";
import {SearchResult} from "./SearchResult";

const SearchResultsTable = ({ results }) => {
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
              <button onClick={() => handleView(result.web_pages)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleView = (url) => {
  window.location.href = url; // Assuming result has an 'id' property
};

export default SearchResultsTable;
