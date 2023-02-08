import React from 'react'
import '../style/home.css'
import { getBrothers, getFounders, getLittle} from './Client.js'

// components of homepage
import AboutUs from './homepage/AboutUs.js'
import Intro from './homepage/Intro.js'
import Brotherhood from './homepage/Brotherhood.js'
import Service from './homepage/Service.js'
import Professional from './homepage/Professional.js'
import Footer from './Footer.js'
import homepage from '../images/footer/homepage.jpg';



async function getFounderLittles() {
  let founders = await getFounders();
  let littles = [];

  for (var i = 0; i < founders.length; i++) {
    // founder has no littles
    if (founders[i].little.length == 0){
      let little = await getLittle(founders[i]);
      founders[i].little = little;
    }

    for (var x = 0; x < founders[i].little.length; x++) {
      littles.push(founders[i].little[x]);
    } 
  }
  console.log(littles);
}

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <div className = "header">
          <h1 className= "red title">
              THETA TAU THETA GAMMA
          </h1>
        </div>
        <button
          onClick = {() => getFounderLittles() }>
          HELLO
          </button>
        <Intro />
        <AboutUs />
        <div className = "pillars">
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
