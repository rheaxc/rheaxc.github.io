import fullfrat from '../../images/homepage/fullfrat.jpg';
import React from 'react';
import './style/aboutus.css'


class AboutUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div class = "about-us-container">
          <div class = "about-us-item" id = "about-us-image-container">
            <img id = "about-us-image" src = {fullfrat} alt = "us!"></img>
          </div>
          <div class = "about-us-item" id = "about-us-text-container">
            <p id = "about-us-text">
              here is a paragraph about us!
            </p>
          </div>
        </div>
    );
  }
}

export default AboutUs;
