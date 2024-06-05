import React from 'react';
import { BiSolidGraduation, BiFace } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import './Content.css'

const info = [
    {
        title: 'Find University',
        icon: <BiSolidGraduation />,
        id: 1
    }
]

const Card1 = () => {
  const navigate = useNavigate();

  const handleCard1Click = () => {
    navigate('/find-best-uni');
  };

  return (
    <div className='card-container'>
      {info.map((item) => (
        <div className='card' key={item.id} onClick={handleCard1Click}>
          <div className="card--cover">{item.icon}  </div>
          <div className='card--title'>
            <h5>{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
