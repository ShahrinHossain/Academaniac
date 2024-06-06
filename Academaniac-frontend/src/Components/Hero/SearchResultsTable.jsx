import React from "react";
import "./SearchResultsTable.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchResultsTable = ({ results }) => {
  const navigate = useNavigate();

  const handleViewClick = async (result) => {
    try {
      const response = await axios.post('http://localhost:5000/uni_scrape/scrape', { name: result.name });
      const scrapedData = response.data;

      const imageResponse = await axios.post('http://localhost:5000/uni_scrape/scrape_image', { name: result.name });
      const imageData = imageResponse.data.images; // Assuming this returns an array of image URLs

      navigate(`/details/`, { state: { result, scrapedData, imageData } });
    } catch (error) {
      console.error('Error scraping data:', error);
    }
  };

  return (
    <div className="search-results-table">
      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={result.id || index}>
                <td>{result.name}</td>
                <td>{result.country}</td>
                <td>
                  <button onClick={() => handleViewClick(result)}>
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
