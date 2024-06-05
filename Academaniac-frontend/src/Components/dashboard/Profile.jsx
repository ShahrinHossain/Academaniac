import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import axios from "axios";
import "./Profile.css";
import {
  BiSolidGraduation,
  BiPaperPlane,
  BiGlobe,
  BiHappy,
  BiSolidPen,
} from "react-icons/bi";

const Profile = () => {
  const [userData, setUserData] = useState({}); // State to store user data from API
  const [name, setName] = useState(""); // State to store user name
  const baseUrl = "../../../../Academaniac-backend/"; // Assuming your backend API base URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials for authentication
        });

        if (response.data.success) {
          setUserData(response.data);
          setName(response.data.name); // Update user name based on response

          // Update info array based on response data
          const updatedInfo = info.map((item) => {
            const { university, cgpa, gre, country, photo } = response.data;
            switch (item.id) {
              case 1:
                return { ...item, title: university };
              case 2:
                return { ...item, title: country };
              case 3:
                return { ...item, title: `CGPA: ${cgpa}` };
              case 4:
                return { ...item, title: `GRE: ${gre || "N/A"}` }; // Handle missing GRE
              default:
                return item;
            }
          });
          setInfo(updatedInfo); // Update info state with modified data
        } else {
          console.error("Error fetching user data:", response.data.message);
          // Handle error (e.g., display an error message to the user)
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error (e.g., display an error message to the user)
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to fetch data only once

  const [info, setInfo] = useState([
    {
      title: "IUT - OIC",
      icon: <BiSolidGraduation />,
      id: 1,
    },
    {
      title: "Bangladesh",
      icon: <BiGlobe />,
      id: 2,
    },
    {
      title: "CGPA:   3.91",
      icon: <BiSolidPen />,
      id: 3,
    },
    {
      title: "GRE:   N/A",
      icon: <BiPaperPlane />,
      id: 4,
    },
  ]);

  // Define photoUrl outside of useEffect (assuming baseUrl is set)
  const photoUrl = `${baseUrl}${userData.photo}`; // Concatenate base URL and photo
  console.log(photoUrl);
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={photoUrl || userImage} alt="" />{" "}
          {/* Use photo from response or default */}
          <h5 className="username">{name}</h5>
          <span className="profession">
            {userData.profession || "Undergraduate"}
          </span>
        </div>
        <div className="user-info">
          {info.map((infoItem) => (
            <div className="info" key={infoItem.id}>
              <div className="info--detail">
                <div className="info--cover">{infoItem.icon}</div>
                <h6 className="title">{infoItem.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
