import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios if not already installed
import departmentData from '../../Depts.json'; // Import the department data
import allUsers from '../../Data.json'; // Import the university data
import './FindUniversities.css';

const Wishlist = () => {
  const { id } = useParams(); // Extract the uni_id from the URL path
  const departmentNames = departmentData[id] || [];
  const [selectedDept, setSelectedDept] = useState('');

  const handleAddToWishlist = async () => {
    try {

      if (selectedDept && {id}) {
        const response = await axios.post(
          'http://localhost:5000/wishlist/',
          { uni_rank: id, dept_name: selectedDept },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          console.log('Added to wishlist:', response.data);
        } else {
          console.error('Error adding to wishlist:', response.data.message);
        }
      } else {
        console.error('No department selected or university not found');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedDept(event.target.value);
  };

  return (
    <div className="content">
      <div className="cardd">
        <p className="title">Which subject do you prefer?</p>
        <select className='depts' onChange={handleSelectChange} value={selectedDept}>
          <option value="">Select Department</option>
          {departmentNames.map((deptName, index) => (
            <option key={index} value={deptName}>
              {deptName}
            </option>
          ))}
        </select>
        <button className="wishlist-button" onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default Wishlist;
