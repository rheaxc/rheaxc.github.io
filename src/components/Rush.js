import React from 'react';
import Video from './rush/Video.js';
import Faq from './rush/FAQ.js';
import Footer from './Footer.js'
import '../style/rush.css'

import website_graphic from '../images/rush/f23-rush.jpeg'
import rush from '../images/footer/rush.jpg'

const handleClick = () =>
{
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdkkBsNRStO4TpcSuEaEuqltBbucz5l7Ch2Q02OwVADmQ8Wtw/viewform")
};

class Rush extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className="rush">
        <div className='interest'>
            <div className  = "rush-schedule">
                <img className = "rush-image" src = {website_graphic} alt = "rush!"></img>
            </div>
            <button className = "interest-links" onClick ={handleClick}>
              Interest Form
            </button>
        </div>
        <Video />
        <div className = "questions">
          <Faq />
        </div>
        <Footer page='rush' image={rush}/>
      </div>
    );
  }
}

export default Rush;
