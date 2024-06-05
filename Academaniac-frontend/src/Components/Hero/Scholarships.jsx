import React,  {useState} from 'react';
import { useParams} from 'react-router-dom';
import './Scholarships.css';
import data from './csvData.js';


  const Scholarships = () => {
    const { country } = useParams();
    const [selectedType, setSelectedType] = useState('');
  
    const scholarships = data[country] || [];
  
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };


  return (
    <div className='etar-moddhe-table'>
      <h4 className="heading">Best scholarships in {country.toUpperCase()}</h4>
      <select className="select-bar" value={selectedType} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="Masters">Masters</option>
        <option value="PhD">PhD</option>
        <option value="Research">Research</option>
        <option value="Postgraduate">Postgraduate</option>
        <option value="Complementary Courses">Complementary Courses</option>
      </select>
      <table border="1" className='scholarships-table'>
        <thead className='scholarships-table-heads'>
          <tr>
            <th>University / Program</th>
            <th>Level of Study</th>
            <th>Benefits</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className='scholarships-table-body'>
          {scholarships
            .filter(item => !selectedType || item.level.toLowerCase().includes(selectedType.toLowerCase()))
            .map((item, index) => (
              <tr key={index}>
                <td>{item.university}</td>
                <td>{item.level}</td>
                <td>{item.benefits}</td>
                <td><button className="link-button" onClick={() => window.open(item.link, "_blank", "noopener noreferrer")}>More</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scholarships;
