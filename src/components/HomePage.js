import React from 'react';
import '../style/home.css';

// components of homepage
import AboutUs from './homepage/AboutUs.js'
import Intro from './homepage/Intro.js'
import Brotherhood from './homepage/Brotherhood.js'
import Service from './homepage/Service.js'
import Professional from './homepage/Professional.js'
import Footer from './Footer.js'
import homepage from '../images/footer/homepage.jpg';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <div class = "header">
          <h1 class= "red title">
              THETA TAU THETA GAMMA
          </h1>
        </div>
        <Intro />
        <AboutUs />
        <div class = "pillars">
          <Brotherhood />
          <Service />
          <Professional />
        </div>
        <Footer page='homepage' image={homepage}/>
      </div>
    );
  }
}

export default HomePage;
