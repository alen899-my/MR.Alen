import React from 'react'
import "../styles/NavBar.css"
const NavBar = () => {
  return (
    <div className="navbar_container">
        <div className="logo">
            <h1>Alen James</h1>
        </div>
        <div className="nav_items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>contact Me</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar