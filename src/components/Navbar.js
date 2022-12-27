import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

export default function Navbar() {

    return (
      <div className= "navbar">
        <div className = "navbar-container">
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
