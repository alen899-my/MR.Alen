import React from "react";
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
    
    <NavBar/>
    <GridBackground>
      <Outlet />
      
    </GridBackground></>
  );
}

export default App;
