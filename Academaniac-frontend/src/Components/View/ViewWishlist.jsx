import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewWishlist.css';//  // Assuming you have the CSS file named ViewWishlist.css
import { BiRightArrow } from 'react-icons/bi';

const ViewWishlist = () => {
    const navigate = useNavigate();
    const [wishlistData, setWishlistData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchWishlist = async () => {
        try {
          const response = await axios.get('http://localhost:5000/wishlist/get-info', {
            withCredentials: true,
          });
  
          if (response.status === 201) {
            // Remove duplicate entries based on university and department combination
            const uniqueWishlistData = Array.from(new Set(response.data.added.map(item => JSON.stringify(item))))
              .map(item => JSON.parse(item));
  
            setWishlistData(uniqueWishlistData);
          } else {
            setError('Failed to fetch wishlist data.');
          }
        } catch (error) {
          setError('Error fetching wishlist data.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWishlist();
    }, []);
  
    const handleAddMore = () => {
      navigate(-1);
    };
  
    const handlePredict = (university, department) => {
      // Implement prediction logic here
      console.log(`Predicting for ${university}, ${department}`);
    };
  
    return (
      <div className="content">
        <div className="cardd">
          <p className="title">Your Wishlist</p>
  
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="wishlist-table">
              <thead>
                <tr>
                  <th>University</th>
                  <th>Department</th>
                  <th>Predict</th> {/* New column for Predict button */}
                </tr>
              </thead>
              <tbody>
                {wishlistData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.university}</td>
                    <td>{item.dept}</td>
                    <td> {/* Predict button */}
                      <button className="predict-button" onClick={() => handlePredict(item.university, item.dept)}><BiRightArrow/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
  
          <button className="wishlist-button" onClick={handleAddMore}>Add More</button>
        </div>
      </div>
    );
  };
  

  

export default ViewWishlist;
