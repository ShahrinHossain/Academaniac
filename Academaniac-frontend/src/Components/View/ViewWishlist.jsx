import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewWishlist = () => {
    const navigate = useNavigate();
    const handleAddMore = () => {
        navigate(-1);
    };
    return (
        <div className="content">
          <div className="cardd">
            <p className="title">Your Wishlist</p>
            
    
            <button className="wishlist-button" onClick={handleAddMore}>Add More</button>
          </div>
        </div>
      );
};

export default ViewWishlist;
