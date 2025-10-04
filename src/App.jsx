import React from "react";
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomePage from "../src/pages/HomePage"
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <>
    
    <NavBar/>
    <GridBackground>
      <Outlet />
      <HomePage/>
      <AboutPage/>
      
    </GridBackground></>
  );
}

export default App;
