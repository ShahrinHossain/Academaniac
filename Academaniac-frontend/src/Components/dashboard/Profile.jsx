import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import axios from "axios";
import "./Profile.css";
import defaultUserImage from "../../assets/dhrubo.png";
import {
  BiSolidGraduation,
  BiPaperPlane,
  BiGlobe,
  BiHappy,
  BiSolidPen,
} from "react-icons/bi";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState(defaultUserImage); // Set default image
  const baseUrl = "http://localhost:5000/"; // Your backend API base URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}user/`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (response.data.success) {
          const { name, university, country, cgpa, gre, photo, profession } =
            response.data;
          setUserData(response.data);
          setName(name);
          setPhotoUrl(photo ? `${baseUrl}${photo}` : defaultUserImage); // Use photo from API or default

          const updatedInfo = info.map((item) => {
            switch (item.id) {
              case 1:
                return { ...item, title: university };
              case 2:
                return { ...item, title: country };
              case 3:
                return { ...item, title: `CGPA: ${cgpa}` };
              case 4:
                return { ...item, title: `GRE: ${gre || "N/A"}` };
              default:
                return item;
            }
          });
          setInfo(updatedInfo);
        } else {
          console.error("Error fetching user data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
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

  console.log(defaultUserImage);

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={defaultUserImage} alt="User Profile" />
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
