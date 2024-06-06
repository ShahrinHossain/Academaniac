import React from 'react';
import { BiSolidGraduation, BiUser } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import './Card2.css';

const info = [
  {
    title: 'My Community',
    icon: <BiUser />,
    id: 1,
    link: '/community'  
  }
];

const Card2 = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className='card-container2'>
      {info.map((item) => (
        <div className='card2' key={item.id} onClick={() => handleCardClick(item.link)}>
          <div className="card--cover2">{item.icon}</div>
          <div className='card--title2'>
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
