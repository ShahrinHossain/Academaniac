import React from 'react';
import { BiEdit } from 'react-icons/bi';

const ProfileHeader = () => {
  return <div className='profile-header'>
    <h4 className='header-title'>Profile</h4>
    <div className="edit">
        <BiEdit className='icon'/>
    </div>
  </div>
}

export default ProfileHeader;
