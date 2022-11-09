import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";
import thtLogo from "../images/tht logo.png";

export default function Navbar() {

    return (
        <div className="navbar">
          <div className = "navbar-container">
            <li className = "navbar-item">
              <Link to="/">
                <img src={thtLogo} height="45" alt="tht-logo" />
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to="/members">
                Members
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to="/rush">
                Rush
              </Link>
            </li>
            <li className = "navbar-item">
              <Link to="/faq">
                FAQ
              </Link>
            </li>
          </div>

        </div>
    );
}
