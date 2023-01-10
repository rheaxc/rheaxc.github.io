import React from 'react';
import Video from './rush/Video.js';
import Faq from './rush/FAQ.js';
import Footer from './Footer.js'
import '../style/rush.css'

import rush_schedule from '../images/rush/rush_schedule.jpeg';
import rush from '../images/footer/rush.jpg'

const handleClick = () =>
{
  window.open("https://forms.gle/etKeoSayd6oeYkiD6")
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
                <img className = "rush-image" src = {rush_schedule} alt = "rush!"></img>
            </div>
            <button className = "interest-links" onClick ={handleClick}>
              Apply Here
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
