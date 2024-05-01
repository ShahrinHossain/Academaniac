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

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
