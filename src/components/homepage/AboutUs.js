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
            Theta Tau is Professional Engineering Fraternity. As a group, we are dedicated to the professional and social development of our members into professionals that will enter the industry as strong, contributing members.
            Our chapter is known as Theta Gamma Chapter and is one of the largest chapters in the Country.
            </p>
            <p>Theta Tau is made up of smart, driven engineers who come
                        from a diverse range of backgrounds and majors. Our
                        chapter holds events weekly designed to instill a
                        brotherhood among our members and develop ourselves as
                        well as our college and University.</p>
          </div>
        </div>
    );
  }
}

export default AboutUs;
