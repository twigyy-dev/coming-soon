import React from "react";
import navlogo from "./images/navlogo.png";
import "../Styles/Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <img src={navlogo} alt="" />
      <a href="mailto:care.twigyy@gmail.com">
        <p>Contact Us</p>
      </a>
    </nav>
  );
}
