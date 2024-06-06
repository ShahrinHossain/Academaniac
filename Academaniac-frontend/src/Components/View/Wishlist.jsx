import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to extract parameters from the URL
import departmentData from '../../Depts.json'; // Import the department data
import './FindUniversities.css'

const Wishlist = () => {
    // Extract the uni_id from the URL path
    const { id } = useParams();

    // Get the department names based on the uni_id from the dept.json file
    const departmentNames = departmentData[id] || [];
    return (
        <div className="content">
          <div className="cardd">
            <p className="title">Which subject do you prefer?</p>
            <select className='depts'>
                    {/* Map through department names and render options */}
                    {departmentNames.map((deptName, index) => (
                        <option key={index} value={deptName}>
                            {deptName}
                        </option>
                    ))}
                </select>
    
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
        </div>
      );

};

export default Wishlist;
