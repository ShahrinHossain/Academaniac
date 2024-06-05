import React, { useState } from "react";
import axios from "axios";
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    cgpa: "",
    gre: "",
    country: "",
    subject: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData({
        ...formData,
        profilePicture: event.target.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = new FormData();

    // Add regular form data
    for (const key in formData) {
      if (formData[key] !== "" && key !== "profilePicture") {
        updatedFormData.append(key, formData[key]);
      }
    }

    // Add the profile picture file
    if (e.target.profilePicture.files[0]) {
      updatedFormData.append(
        "profilePicture",
        e.target.profilePicture.files[0]
      );
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/user/update",
        updatedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        console.log("Profile updated successfully!");
      } else {
        console.error("Error updating profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error uploading profile:", error);
    }
  };

  return (
    <div className="edit-profile">
      <h4 className="edit-form-name">Edit Profile</h4>
      <div className="save-changes-button">
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
      <div className="edit-profile-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>University:</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CGPA:</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>GRE Score:</label>
            <input
              type="text"
              name="gre"
              value={formData.gre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              name="profilePicture"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Profile"
                style={{ maxWidth: "100%", marginTop: "10px" }}
              />
            )}
            <button
              type="button"
              onClick={() =>
                document.querySelector('input[type="file"]').click()
              }
            >
              Upload
            </button>
          </div>
          <div className="save-changes-button">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
