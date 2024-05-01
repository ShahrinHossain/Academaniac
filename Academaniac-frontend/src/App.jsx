// import React, { useState } from "react";
// import Navbar from "./Components/Navbar/Navbar.jsx";
// import Hero from "./Components/Hero/Hero.jsx";
// import SearchBar from "./Components/Hero/SearchBar.jsx";
// import SearchResultsList from "./Components/Hero/SearchResultsList.jsx";
// import DetailedView from "./Components/View/DetailedView.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const App = () => {
//   // State to store search results
//   const [results, setResults] = useState([]);

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedView from "./Components/View/DetailedView.jsx";
import NoPage from "./Components/View/NoPage.jsx";
import LoginPage from "./Components/View/LoginPage.jsx";
import SignUpPage from "./Components/View/SignUpPage.jsx";

const App = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
          <Route
            path="details"
            element={
              <>
                <DetailedView />
              </>
            }
          />
          <Route path="*" element={<NoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
