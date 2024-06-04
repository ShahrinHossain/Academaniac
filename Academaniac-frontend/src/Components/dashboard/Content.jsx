import React from "react";
import ContentHeader from "./ContentHeader";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Profile from "./Profile";

const Content = () => {
  return <div className="content">
    <ContentHeader/>
    <Card1 /> <Card2/>
  </div>
  
};

export default Content;
