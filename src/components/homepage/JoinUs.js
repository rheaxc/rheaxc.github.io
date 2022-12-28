import bottom from '../../images/homepage/bottom.jpg';
import "./style/joinus.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import React from 'react';

class JoinUs extends React.Component {
  constructor() {
    super();
  };




  render() {
    return (
        <div class = "join-us-container">
          <div class="container-fluid p-0">

          <div class="hover hover-3 text-white rounded">
            <img class="img-fluid of" src={bottom} />
            <div class="hover-overlay"></div>
                <div class="hover-3-content px-5 py-4">
                    <h3 class="hover-3-title white text-uppercase font-weight-bold mb-1">JOIN THE BROTHERHOOD</h3>
                    <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> RUSH > </Link>
                </div>
            </div>
          </div>
        </div>

    );
  }
}

export default JoinUs;

