import React, { useState } from 'react';
import "./style/service.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FastMarquee from 'react-fast-marquee';

// brotherhood images are here:
import image1 from '../../images/homepage/brotherhood/1.jpg';
import image2 from '../../images/homepage/brotherhood/9.jpg';
import image3 from '../../images/homepage/brotherhood/3.jpg';
import image4 from '../../images/homepage/brotherhood/4.jpg';
import image5 from '../../images/homepage/brotherhood/5.jpg';
import image6 from '../../images/homepage/brotherhood/6.jpg';
import image7 from '../../images/homepage/brotherhood/7.jpg';
import image8 from '../../images/homepage/brotherhood/8.jpg';

const Service = () => {
  const firstrow = [image1, image2, image3, image4, image5, image6, image7, image8];
  const secondrow = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div class="pillar-item">
      <div class="pillar-title service-title">
        SERVICE
      </div>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        gradient={false}
        direction="righ"
        class = "marquee"
        >
        {firstrow.map((image) => (
          <img src={image} alt="service" class="img"></img>
        ))}
      </FastMarquee>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        gradient={false}
        direction="le"
        class = "marquee"
        >
        {secondrow.map((image) => (
          <img src={image} alt="service" class="img"></img>
        ))}
      </FastMarquee>
      </div>
    );
  };
  
export default Service;