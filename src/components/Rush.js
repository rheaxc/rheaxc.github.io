import React from 'react';
import Video from './rush/Video.js';
import Faq from './rush/FAQ.js';
import Footer from './Footer.js'
import '../style/rush.css'

import rush_schedule from '../images/rush/rush_schedule.jpg';
import rush from '../images/footer/rush.jpg'


class Rush extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="rush">
        <div className = "rush-header">
          <h1 className = "rush-title">
            RUSH!
          </h1>
          <h1 className = "rush-title">
            RUSH!
          </h1>
          <h1 className = "rush-title">
            RUSH!
          </h1>
        </div>
        <div className = 'info-container'>
          <div className = "interest-info">
            <p> Thank you so much for your interest in Theta Tau! </p>

            <p> Below is our schedule for our winter 2023 rush semester. You can also sign up at our
            <a className = "red interest-links" href = "https://forms.gle/a9zmfc9f5i5hgP4m7"> interest form </a>
            to stay updated!
            </p>

            <p>
            If you have any questions, please
            <a className = "red interest-links" href = "mailto:tht-rush@umich.edu"> contact rush. </a>
            </p>
          </div>
          <div className  = "rush-schedule">
            <img className = "rush-image" src = {rush_schedule} alt = "rush!"></img>
          </div>
        </div>
        <Video />
        <div className = 'questions'>
          <Faq />
        </div>
        <Footer page='rush' image={rush}/>
      </div>
    );
  }
}

export default Rush;
