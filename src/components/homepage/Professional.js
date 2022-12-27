import React, { useState } from 'react';
import "./style/professional.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FastMarquee from 'react-fast-marquee';

// brotherhood first row images are here:
import image1 from '../../images/homepage/brotherhood/1.jpg';
import image2 from '../../images/homepage/brotherhood/2.jpg';
import image3 from '../../images/homepage/brotherhood/3.jpg';
import image4 from '../../images/homepage/brotherhood/4.jpg';
import image5 from '../../images/homepage/brotherhood/5.jpg';
import image6 from '../../images/homepage/brotherhood/6.jpg';
import image7 from '../../images/homepage/brotherhood/7.jpg';
import image8 from '../../images/homepage/brotherhood/8.jpg';

// brotherhood second row images are here:
import image9 from '../../images/homepage/brotherhood/9.jpg';
import image10 from '../../images/homepage/brotherhood/10.jpg';
import image11 from '../../images/homepage/brotherhood/11.jpg';
import image12 from '../../images/homepage/brotherhood/12.jpg';
import image13 from '../../images/homepage/brotherhood/13.jpg';
import image14 from '../../images/homepage/brotherhood/14.jpg';
import image15 from '../../images/homepage/brotherhood/15.jpg';
import image16 from '../../images/homepage/brotherhood/16.jpg';

const Professional = () => {
  const firstrow = [image1, image2, image3, image4, image5, image6, image7, image8];
  const secondrow = [image9, image10, image11, image12, image13, image14, image15, image16];

  return (
    <div class="pillar-item">
      <div class="pillar-title brotherhood-title">
        PROFESSIONAL
      </div>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        direction="left"
        gradient={false}
        class = "marquee"
        >
        {firstrow.map((image) => (
          <img src={image} alt="brohood" class="img"></img>
        ))}
      </FastMarquee>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        gradient={false}
        direction="left"
        class = "marquee"
        >
        {secondrow.map((image) => (
          <img src={image} alt="brohood" class="img"></img>
        ))}
      </FastMarquee>
      </div>
    );
  };

export default Professional;
