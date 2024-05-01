import React from "react";
import "./SearchResultsTable.css";
import { useNavigate } from "react-router-dom";

const SearchResultsTable = ({ results }) => {
  const navigateTo = useNavigate(); // Get history object

  return (
    <div className="search-results-table">
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> */}
      {results.map((result) => (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      ))}
    </div>
  );
};

const handleView = (url) => {
  window.location.href = url; // Assuming result has an 'id' property
};

export default SearchResultsTable;
