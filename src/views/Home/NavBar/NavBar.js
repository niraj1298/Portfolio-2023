import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div> <img className="card__image" src="https://scontent.fagc3-1.fna.fbcdn.net/v/t39.30808-6/349061242_154854020900804_2183159603774144043_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V-3N3IuoPuEAX8Lw5WY&_nc_ht=scontent.fagc3-1.fna&oh=00_AfBxcNihhHyZpKgVkgF2QMG3ssaSID5y0mgtOP30HdJdGA&oe=64EB3D1F" alt="Picture of Niraj Nepal"/> </div>


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
