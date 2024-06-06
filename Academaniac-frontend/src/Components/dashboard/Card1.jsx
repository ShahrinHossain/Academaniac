import React from "react";
import { BiSolidGraduation, BiFace } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./Content.css";
import { ImPointDown } from "react-icons/im";

const info = [
  {
    title: "Find University",
    icon: <BiSolidGraduation />,
    id: 1,
  },
];

const Card1 = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/find-university"); // Programmatically navigate to the edit profile page
  };
  return (
    <div className="card-container">
      {info.map((item) => (
        <div className="card" key={item.id}>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title" onClick={handleOnClick}>
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
