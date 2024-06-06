import React, { useState } from "react";
import SearchBar from "../bits_and_bobs/SearchBar";
import allUsers from "../../Data.json";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import './FindUniversities.css';

const FindUniContent = () => {
  const [selectedUniversityName, setSelectedUniversityName] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGoButtonClick = () => {
    // Find the selected university in the data array
    const selectedUniversity = allUsers.find(
      (university) => university.name === selectedUniversityName
    );

    // If the selected university is found, navigate to the next page with the ID of the matched university
    if (selectedUniversity) {
      navigate(`/university/${selectedUniversity.rank}`); // Assuming "rank" is the ID of the university
    }
  };

  return (
    <div className="content">
      <div className="cardd">
        <p className="title">Let us know your dream university</p>
        <SearchBar 
  placeholder="Enter a name... " 
  data={allUsers} 
  onSelect={(selected) => setSelectedUniversityName(selected)}
/>

        <button className="wishlist-button" onClick={handleGoButtonClick}>Go <BiRightArrow fontSize={20}/></button>
      </div>
    </div>
  );
};

export default FindUniContent;
