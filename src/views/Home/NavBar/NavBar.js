import React from "react";
import "./NavBar.css";
import Nlogo from "./Nlogo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div> <img src="Nlogo.png"/></div>  


      <ul className="navbar-links">
        <li className="navbar-link">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-link">
          <a href="#about">About</a>
        </li>
        <li className="navbar-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
