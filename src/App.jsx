import React from "react";
import { Outlet } from "react-router-dom";
import  GridBackground  from "./components/GridBackground";
import "../src/styles/App.css";

function App() {
  return (
    <GridBackground>
      <Outlet />
    </GridBackground>
  );
}

export default App;
