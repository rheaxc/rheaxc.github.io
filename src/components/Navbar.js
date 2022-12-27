import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import logo from "../images/tht-logo.png";

export default function Navbar() {

    return (
      <div className= "navigation">
        <div className = "logo">
          <div class = "image"> 
           <img src = {logo} alt = "tht"/>
          </div>
          <p class = "umich"> university of michigan </p>
        </div>
        <div className = "nav-container">
          <li className = "navbar-item">
            <Link to= "/">
              Home
            </Link>
          </li>
          <li className = "navbar-item">
            <Link to= "/members">
              meet our brothers
            </Link>
          </li>
          <li className = "navbar-item">
            <Link to= "/rush">
              join the family
            </Link>
          </li>
          <li className="navbar-item">
            <Link to= "/faq">
              i am confused
            </Link>
          </li>
        </div>
      </div>

    );
}
