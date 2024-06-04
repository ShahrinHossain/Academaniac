import React from 'react';
import { BiSolidGraduation, BiUser} from "react-icons/bi";
import './Card2.css'

const info = [
    
    {
        title: 'My Community',
        icon: <BiUser/> 
    }
]

const Card2 = () => {
  return <div className='card-container2'>
    {info.map((item) => (
        <div className='card2'>
           <div className="card--cover2">{item.icon}</div>
            <div className='card--title2'>
                <h5>{item.title}</h5>
            </div>
        </div>
    ))}
  </div>
};

export default Card2;

