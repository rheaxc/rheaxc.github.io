import React from "react";
import "../style/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

// images
import rush from '../images/footer/rush.jpg'
import ig from '../images/footer/IG.svg'
import { InputGroup } from "react-bootstrap";



class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
        <div className = "footer-container">
          <div className="container-fluid p-0">
          <div className="hover hover-3 text-white rounded">
            <img className="img-fluid of" src={this.props.image} />
            <div className="hover-overlay"></div>
            
              {(this.props.page === 'homepage') ? (
                <div className="hover-3-content px-5 py-4">
                  <h3 className="hover-3-title black text-uppercase font-weight-bold mb-1">JOIN THE BROTHERHOOD</h3>
                  <Link to='/rush' target="_top" className= "hover-3-description text-uppercase mb-0"> RUSH </Link>
                </div>
              ) : (
                <div className="contact-info-content px-5 py-4">
                  <div className="info">
                    <h3 className="hover-3-title white text-uppercase font-weight-bold mb-1" style = {{position: 'relative'}}>CONTACT US</h3>
                    <div className = "leftContainer">
                      <a href="mailto:tht-regents@umich.edu" className= "hover-3-description small text-uppercase mb-0"> REGENT & VICE REGENT  </a>
                      <a href="mailto:tht-eboard@umich.edu" className= "hover-3-description small text-uppercase mb-0"> EXECUTIVE BOARD  </a>
                      <a href="mailto:tht-corsec@umich.edu" className= "hover-3-description small text-uppercase mb-0"> ALUMNI & INTERCHAPTER RELATIONS  </a>
                      <a href="mailto:tht-corporate@umich.edu" className= "hover-3-description small text-uppercase mb-0"> COOPORATE & SPONSORSHIP EVENTS  </a>
                      <a className="hover-3-description instagram" href="https://www.instagram.com/thetatau_umich/">
                        <img src={ig} alt="Instagram" style={{width:'50px', height: '50px'}}></img>
                      </a> 
                    </div>
                  </div>
                </div>
              ) }
            </div>
          </div>
        </div>

    );
  }
}

export default Footer;
