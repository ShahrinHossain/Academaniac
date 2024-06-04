import React from "react";
import ProfileHeader from "./ProfileHeader";
import './Profile.css';
import userImage from '../../assets/myimage.jpg';
import { BiSolidGraduation, BiPaperPlane, BiGlobe, BiHappy, BiSolidPen } from "react-icons/bi";

const info= [
    {
        title: 'IUT - OIC',
        icon: <BiSolidGraduation/>
    },
    {
        title: 'Bangladesh',
        icon: <BiGlobe/>
    },
    {
        title: 'CGPA:   3.91',
        icon: <BiSolidPen/>
    },
    {
        title: 'GRE:   N/A',
        icon: <BiPaperPlane/>
    }
]

const Profile = () => {
  return( <div className="profile">
    <ProfileHeader/> 
    
    <div className="user--profile">
        <div className="user--detail">
            <img src={userImage} alt="" />
            <h5 className="username">Shahrin Hossain</h5>
            <span className="profession">Undergraduate</span>
        </div>

        <div className="user-info">
            {info.map((info) => (
                <div className="info">
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
