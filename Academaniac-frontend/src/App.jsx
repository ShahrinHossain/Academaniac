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
import FirstLoginPage from "./Components/View/FirstLoginPage.jsx";
import Dashboard from "./Components/dashboard/Dashboard.jsx";
import EditProfile from './Components/dashboard/EditProfile.jsx';

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
                <Navbar />
                <DetailedView />
              </>
            }
          />
          <Route path="*" element={<NoPage />} />
          <Route path="login" element={<> <Navbar /> <LoginPage /> </>} />
          <Route path="signup" element={<> <Navbar /> <SignUpPage /> </>} />
          <Route path="login/first" element={<> <Navbar /> <FirstLoginPage /> </>} />
          <Route path="dashboard" element={<> <Navbar /> <Dashboard /> </>} />
          <Route path="/edit-profile" element={<><Navbar/> <EditProfile /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
