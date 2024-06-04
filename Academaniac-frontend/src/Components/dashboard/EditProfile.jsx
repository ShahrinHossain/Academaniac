import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    cgpa: '',
    gre: '',
    country: '',
    subject: '',
    profilePicture: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData({
        ...formData,
        profilePicture: event.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="edit-profile">
      <h4 className='edit-form-name'>Edit Profile</h4>
      <div className="save-changes-button">
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
      <div className="edit-profile-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>University:</label>
            <input type="text" name="university" value={formData.university} onChange={handleChange} />
          </div>
          <div>
            <label>CGPA:</label>
            <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} />
          </div>
          <div>
            <label>GRE Score:</label>
            <input type="text" name="gre" value={formData.gre} onChange={handleChange} />
          </div>
          <div>
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          </div>
          <div>
            <label>Profile Picture URL:</label>
            <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
            {formData.profilePicture && <img src={formData.profilePicture} alt="Profile" style={{ maxWidth: '100%', marginTop: '10px' }} />}
            <button onClick={() => document.querySelector('input[type="file"]').click()}>Upload</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default EditProfile;
