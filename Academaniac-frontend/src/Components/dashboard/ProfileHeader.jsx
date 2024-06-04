import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';

const ProfileHeader = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleEditClick = () => {
    navigate('/edit-profile'); // Programmatically navigate to the edit profile page
  };

  return (
    <div className='profile-header'>
      <h4 className='header-title'>Profile</h4>
      <div className="edit" onClick={handleEditClick}>
        <BiEdit className='icon'/>
      </div>
    </div>
  );
}

export default ProfileHeader;
