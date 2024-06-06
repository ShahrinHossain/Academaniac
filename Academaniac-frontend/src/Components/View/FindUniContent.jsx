import React, { useEffect, useState } from "react";
import SearchBar from "../bits_and_bobs/SearchBar";
import CountriesDropdown from "../Hero/CountriesDropdown";
import allUsers from "../../Data.json";

import "../dashboard/Content.css";

const FindUniContent = () => {
  useEffect(() => {
    const getusers = async () => {
      const getres = await fetch("http://localhost:5000/university");
      const setusers = await getres.json();
      console.log(setusers.results);
      setAllcountry(await setusers.results);
    };
    getusers();
  }, []);

  return (
    <div className="content">
      <div className="card">
        <SearchBar placeholder="Enter a name... " data={allUsers} />
      </div>
    </div>
  );
  <></>;
};

export default FindUniContent;
