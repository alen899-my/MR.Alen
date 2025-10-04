import React from "react";
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomePage from "../src/pages/HomePage"
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
function App() {
  return (
    <>
    
    <NavBar/>
    <GridBackground>
      <Outlet />
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      
    </GridBackground></>
  );
}

export default App;
