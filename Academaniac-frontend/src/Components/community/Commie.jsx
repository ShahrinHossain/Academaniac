import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiLogoDiscord } from 'react-icons/bi';
import './commie.css';

const Commie = ({ userId }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (!userId) return;

    // Fetch university members from the API
    axios.get(`http://your-backend-url/university_members?user_id=${userId}`)
      .then(response => {
        if (response.data.success) {
          setMembers(response.data.members);
        } else {
          console.error(response.data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching university members:', error);
      });
  }, [userId]);

  return (
    <div className="commie-container">
      <div className="portrait-rectangle">
        <h2>University Members</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>
              <img src={member.photo} alt={member.name} width="50" height="50" />
              <div>{member.name}</div>
              <div>{member.country}</div>
              <div>CGPA: {member.cgpa}</div>
              <div>GRE: {member.gre}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="square">
        <a href="https://discord.gg/J2ZeVbfH" target="_blank" rel="noopener noreferrer">
          <BiLogoDiscord fontSize={150} />
          <p style={{ fontSize: '24px', textAlign: 'center' }}>Join Our Discord</p>
        </a>
      </div>
    </div>
  );
};

export default Commie;
