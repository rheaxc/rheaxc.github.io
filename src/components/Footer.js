import React from "react";
import "../style/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// images
import rush from '../images/footer/rush.jpg'



class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
        <div class = "footer-container">
          <div class="container-fluid p-0">
          <div class="hover hover-3 text-white rounded">
            <img class="img-fluid of" src={this.props.image} />
            <div class="hover-overlay"></div>
              {(this.props.page === 'homepage') ? (
                <div class="hover-3-content px-5 py-4">
                  <h3 class="hover-3-title white text-uppercase font-weight-bold mb-1">JOIN THE BROTHERHOOD</h3>
                  <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> RUSH > </Link>
                </div>
              ) : (
                <div class="hover-3-content px-5 py-4">
                  <h3 class="hover-3-title white text-uppercase font-weight-bold mb-1">CONTACT US</h3>
                  <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> REGENT & VICE REGENT > </Link>
                  <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> EXECUTIVE BOARD > </Link>
                  <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> ALUMNI & INTERCHAPTER RELATIONS> </Link>
                  <Link to='/rush' class= "hover-3-description small text-uppercase mb-0"> COOPORATE & SPONSORSHIP EVENTS> </Link>
                </div>
              ) }
            </div>
          </div>
        </div>

    );
  }
}

export default Footer;
