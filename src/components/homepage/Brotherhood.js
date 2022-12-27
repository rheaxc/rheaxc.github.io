import React from 'react';
import './style/brotherhood.css'

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
          <div class = "pillar-images brotherhood-image-container">
            <div class = "img-container-item">
              <img src={image1} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image2} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image3} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image4} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image5} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image6} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image7} alt="brohood"></img>
            </div>
            <div class = "img-container-item">
              <img src={image8} alt="brohood"></img>
            </div>
          </div>
        </div>
    );
  }
}

export default Brotherhood;
