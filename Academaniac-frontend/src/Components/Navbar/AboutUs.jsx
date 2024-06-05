import React from "react";
import "./AboutUs.css"; // Ensure this CSS file is created and styled
import mem1Image from '../../assets/dhrubo.png';
import mem2Image from '../../assets/sreya.png';
import mem3Image from '../../assets/siam.png';
import mem4Image from '../../assets/sahil.png';

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
        
        <div className="about-us-container">
            <p>This website is designed by Team TaranTula from department of CSE,Islamic University of Technology-OIC, Bangladesh</p>
            <div className="team-container">
      
      <div className="team-members">
      <div className="team-member">
          <img src={mem1Image} alt="Member 1" className="round-image" />
          <div className="member-details">
            <p>Abu Bakor Siddique</p>
            <p>abubakor@iut-dhaka.edu</p>
            <p>01789539863</p>
          </div>
        </div>
        <div className="team-member">
        <img src={mem2Image} alt="Member 2" className="round-image" />
          <div className="member-details">
            <p>Shahrin Hossain</p>
            <p>shahrin@iut-dhaka.edu</p>
            <p>01552393972</p>
          </div>
        </div>
        <div className="team-member">
        <img src={mem3Image} alt="Member 3" className="round-image" />
          <div className="member-details">
            <p>Sadman Ahmed</p>
            <p>sadman@iut-dhaka.edu</p>
            <p>01743182053</p>
          </div>
        </div>
        <div className="team-member">
        <img src={mem4Image} alt="Member 4" className="round-image" />
          <div className="member-details">
            <p>Sadman Rahman</p>
            <p>sahil@iut-dhaka.edu</p>
            <p>01953320202</p>
          </div>
        </div>
      
    </div>
    </div>
    </div>
    </div>
      
    
  );
};

export default AboutUs;
