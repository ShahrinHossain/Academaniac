
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
import EditProfile from "./Components/dashboard/EditProfile.jsx";
import AboutUs from "./Components/Navbar/AboutUs.jsx";
import Terms from "./Components/Navbar/Terms.jsx";
import CV from "./Components/Navbar/CV.jsx";
import SOP from "./Components/Navbar/SOP.jsx";
import FindUniversities from "./Components/View/FindUniversities.jsx";
import FindUniContent from "./Components/View/FindUniContent.jsx";
import Sidebar from "./Components/dashboard/Sidebar.jsx";
import Scholarships from "./Components/Hero/Scholarships.jsx";
import FindBestUni from "./Components/dashboard/FindBestUni.jsx";
import { Nav } from "react-bootstrap";
import allUsers from "./Data.json";
import Commie from "./Components/community/Commie.jsx";
import Add_wishlist from "./Components/View/Add_wishlist.jsx";

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
          <Route
            path="login"
            element={
              <>
                {" "}
                <Navbar /> <LoginPage />{" "}
              </>
            }
          />
          <Route
            path="signup"
            element={
              <>
                {" "}
                <Navbar /> <SignUpPage />{" "}
              </>
            }
          />
          <Route
            path="login/first"
            element={
              <>
                {" "}
                <Navbar /> <FirstLoginPage />{" "}
              </>
            }
          />
          <Route
            path="dashboard"
            element={
              <>
                {" "}
                <Navbar /> <Dashboard />{" "}
              </>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <>
                <Navbar /> <EditProfile />{" "}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />{" "}
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Navbar />
                <Terms />{" "}
              </>
            }
          />
          <Route
            path="/cv"
            element={
              <>
                <Navbar />
                <CV />{" "}
              </>
            }
          />
          <Route
            path="/sop"
            element={
              <>
                <Navbar />
                <SOP />{" "}
              </>
            }
          />
          <Route
            path="/find-university"
            element={
              <><Navbar/>
                
                < FindUniversities />
              </>
            }
          />
          <Route
            path="login"
            element={
              <>
                {" "}
                <Navbar /> <LoginPage />{" "}
              </>
            }
          />
          <Route
            path="signup"
            element={
              <>
                {" "}
                <Navbar /> <SignUpPage />{" "}
              </>
            }
          />
          <Route
            path="login/first"
            element={
              <>
                {" "}
                <Navbar /> <FirstLoginPage />{" "}
              </>
            }
          />
          <Route
            path="dashboard"
            element={
              <>
                {" "}
                <Navbar /> <Dashboard />{" "}
              </>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <>
                <Navbar /> <EditProfile />{" "}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />{" "}
              </>
            }
          />
          <Route
            path="/terms"
            element={
              <>
                <Navbar />
                <Terms />{" "}
              </>
            }
          />
          <Route
            path="/cv"
            element={
              <>
                <Navbar />
                <CV />{" "}
              </>
            }
          />
          <Route
            path="/sop"
            element={
              <>
                <Navbar />
                <SOP />{" "}
              </>
            }
          />
          <Route
            path="/find-best-uni"
            element={
              <>
                <Navbar /> <FindBestUni />{" "}
              </>
            }
          />
          <Route
            path="/scholarships/:country"
            element={
              <>
                <Navbar /> <Scholarships />
              </>
            }
          />
          <Route
            path="/community"
            element={
              <>
                <Navbar /> <Commie />
              </>
            }
          />
          <Route
            path="/university/:id"
            element={
              <>
                <Navbar /> <Add_wishlist />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
