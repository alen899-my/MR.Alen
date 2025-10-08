import React from "react";
import { Analytics } from "@vercel/analytics/next"
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomePage from "../src/pages/HomePage"
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
  return (
    <>
    
    <NavBar/>
    <GridBackground>
      <Outlet />
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
    </GridBackground></>
  );
}

export default App;
