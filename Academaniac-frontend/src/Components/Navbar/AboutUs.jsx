import React from "react";
import "./AboutUs.css"; // Ensure this CSS file is created and styled

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <h4 className="about-us-title">What is Academaniacs?</h4>
        <p>
          Academaniacs aims to help you through your study abroad landscape. It
          is a central website where you can find your dream universities and
          also know your odds of getting into one of your favourite
          universities, by using ML based prediction. Academaniacs also offers
          you a community aspect. You can look for and talk to other people from
          different universities and find some alumni whenever you need help
          with something.
        </p>
      </div>
      <div className="about-us-container">
        <h4 className="about-us-title">What features does it have?</h4>
        <ul>
          <li>Search universities by name</li>
          <li>Search universities by rank</li>
          <li>Search universities by country</li>
          <li>View information about universities all over the world</li>
          <li>Redirecting links to university websites</li>
        </ul>
        <p>The additional features you get access to after signing up:</p>
        <ul>
          <li>Keeping academic record</li>
          <li>Shortlist favourite universities</li>
          <li>Get to know the probability to admit into your favourite universities</li>
          <li>Connect with alumni</li>
          <li>Being part of a scholar community</li>
        </ul>
      </div>
      

    </div>
  );
};

export default AboutUs;
