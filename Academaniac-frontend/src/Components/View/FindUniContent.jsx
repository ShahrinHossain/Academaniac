import React, { useEffect, useState } from "react";
import SearchBar from "../bits_and_bobs/SearchBar";
import CountriesDropdown from "../Hero/CountriesDropdown";
import allUsers from "../../Data.json";
import { BiRightArrow } from "react-icons/bi";

import './FindUniversities.css';

const FindUniContent = () => {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const getRes = await fetch("http://localhost:5000/university");
      const setUsers = await getRes.json();
      console.log(setUsers.results);
      setAllCountry(await setUsers.results);
    };
    getUsers();
  }, []);

  return (
    <div className="content">
      <div className="cardd">
        <p className="title">Let us know your dream university</p>
        <SearchBar placeholder="Enter a name... " data={allUsers} />
        <button className="wishlist-button">Go <BiRightArrow fontSize={20}/></button>
      </div>
    </div>
  );
};

export default FindUniContent;
