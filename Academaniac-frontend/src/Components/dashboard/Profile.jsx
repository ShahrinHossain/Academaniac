import React from "react";
import ProfileHeader from "./ProfileHeader";
import './Profile.css';
import userImage from '../../assets/myimage.jpg';
import { BiSolidGraduation, BiPaperPlane, BiGlobe, BiHappy, BiSolidPen } from "react-icons/bi";

const info = [
    {
        title: 'IUT - OIC',
        icon: <BiSolidGraduation />,
        id: 1
    },
    {
        title: 'Bangladesh',
        icon: <BiGlobe />,
        id: 2
    },
    {
        title: 'CGPA:   3.91',
        icon: <BiSolidPen />,
        id: 3
    },
    {
        title: 'GRE:   N/A',
        icon: <BiPaperPlane />,
        id: 4
    }
]

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader /> 
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h5 className="username">Shahrin Hossain</h5>
          <span className="profession">Undergraduate</span>
        </div>
        <div className="user-info">
          {info.map((info) => (
            <div className="info" key={info.id}>
              <div className="info--detail">
                <div className="info--cover">{info.icon}</div>
                <h6 className="title">{info.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
