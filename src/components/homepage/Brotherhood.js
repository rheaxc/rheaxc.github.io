import React from 'react';
import './style/brotherhood.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: LMAO MAKE THIS WAY PRETTIER W BOOTSTRAP

// brotherhood images are here:
import image1 from '../../images/homepage/brotherhood/1.jpg'
import image2 from '../../images/homepage/brotherhood/9.jpg'
import image3 from '../../images/homepage/brotherhood/3.jpg'
import image4 from '../../images/homepage/brotherhood/4.jpg'
import image5 from '../../images/homepage/brotherhood/5.jpg'
import image6 from '../../images/homepage/brotherhood/6.jpg'
import image7 from '../../images/homepage/brotherhood/7.jpg'
import image8 from '../../images/homepage/brotherhood/8.jpg'

class Brotherhood extends React.Component {
  render() {
    return (
        <div class = "pillar-item">
          <div class = "pillar-title brotherhood-title">
            Brotherhood
          </div>
          <div class="brotherhood-images  d-flex flex-wrap">
            <img src={image1} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image2} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image3} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image4} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image5} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image6} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image7} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
            <img src={image8} alt="brohood" class="img-fluid img-thumbnail w-25"></img>
          </div>
        </div>
    );
  }
}

export default Brotherhood;
