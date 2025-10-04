import React from "react";
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
import HomePage from "../src/pages/HomePage"
function App() {
  return (
    <>
    
    <NavBar/>
    <GridBackground>
      <Outlet />
      <HomePage/>
      
    </GridBackground></>
  );
}

export default App;
