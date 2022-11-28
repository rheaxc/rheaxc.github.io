import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'
import thtLogo from '../images/tht logo.png'

export default function Navbar() {
  return (
    <div className="navbar navbar-default fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="navbar-container">
        <li className="navbar-item">
          <Link to="/homepage">
            <img src={thtLogo} height="45" alt="tht-logo" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/homepage">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/members">Members</Link>
        </li>
        <li className="navbar-item">
          <Link to="/rush">Rush</Link>
        </li>
        <li className="navbar-item">
          <Link to="/faq">FAQ</Link>
        </li>
        <li className="navbar-item">
          <Link to="/alum">Alum</Link>
        </li>
      </div>
    </div>
  )
}
