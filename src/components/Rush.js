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
        <div className = "interest-form">
          <a className = "interest-links" href = "https://forms.gle/a9zmfc9f5i5hgP4m7"> Interest Form </a>
          <a className = "interest-links" href = "mailto:tht-rush@umich.edu"> Contact: tht-rush@umich.edu </a>
        </div>
        <div className  = "rush-schedule">
          <img className = "rush-image" src = {rush_schedule} alt = "rush!"></img>
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
