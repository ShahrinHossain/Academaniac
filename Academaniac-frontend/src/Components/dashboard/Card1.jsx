import React from 'react';
import { BiSolidGraduation, BiFace} from "react-icons/bi";
import './Content.css'

const info = [
    {
        title: 'Find University',
        icon: <BiSolidGraduation />
    }
]

const Card1 = () => {
  return <div className='card-container'>
    {info.map((item) => (
        <div className='card'>
            <div className="card--cover">{item.icon}</div>
            <div className='card--title'>
                <h5>{item.title}</h5>
            </div>
        </div>
    ))}
  </div>
};

export default Card1;

