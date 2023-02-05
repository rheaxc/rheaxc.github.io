import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import logo from "../images/tht-logo.png";

export default function Navbar() {

    return (
      <div className= "navigation">
        <div className = "logo">
          <div className = "image">
            <Link to= "/">
              <img src = {logo} alt = "tht"/>
            </Link>
          </div>
          <p className = "umich"> University of Michigan </p>
        </div>
        <div className = "nav-container">
          <li className = "navbar-item">
            <Link to= "/">
              Home
            </Link>
          </li>
          <li className = "navbar-item">
            <Link to= "/members">
              Meet our Brothers
            </Link>
          </li>
          <li className = "navbar-item">
            <Link to= "/rush">
              Join the Family
            </Link>
          </li>
          <li className = "navbar-item">
            <Link to= "/signin">
                Sign in Bitch
            </Link>
          </li>
        </div>
      </div>

    );
}
