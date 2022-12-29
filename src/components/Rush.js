import React from 'react';
import Video from './rush/Video.js';
import '../style/rush.css'
import rush_schedule from '../images/rush/rush_schedule.jpg';


class Rush extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="rush">
        <h1 className = "rush-header">
          RUSH RUSH RUSH
        </h1>
        <Video />
        <div className = "interest-form">
          <a className = "interest-links" href = "https://findtheinvisiblecow.com/"> interest form </a>
          <a className = "interest-links" href = "mailto:tht-rush@umich.edu"> contact: tht-rush@umich.edu </a>
        </div>
        <div className  = "rush-schedule">
          <img className = "rush-image" src = {rush_schedule} alt = "rush!"></img>
        </div>
      </div>
    );
  }
}

export default Rush;
