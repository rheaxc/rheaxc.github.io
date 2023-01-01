import React from 'react';
import "./style/professional.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FastMarquee from 'react-fast-marquee';

//Professional first row images are here:
import image1 from '../../images/homepage/professional/1.jpg';
import image2 from '../../images/homepage/professional/2.jpg';
import image3 from '../../images/homepage/professional/3.jpg';
import image4 from '../../images/homepage/professional/4.jpg';
import image5 from '../../images/homepage/professional/5.jpg';
import image6 from '../../images/homepage/professional/6.jpg';
import image7 from '../../images/homepage/professional/7.jpg';
import image8 from '../../images/homepage/professional/8.jpg';

//Professional second row images are here:
import image9 from '../../images/homepage/professional/9.jpg';
import image10 from '../../images/homepage/professional/10.jpg';
import image11 from '../../images/homepage/professional/11.jpg';
import image12 from '../../images/homepage/professional/12.jpg';
import image13 from '../../images/homepage/professional/13.jpg';
import image14 from '../../images/homepage/professional/14.jpg';
import image15 from '../../images/homepage/professional/15.jpg';
import image16 from '../../images/homepage/professional/16.jpg';

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
        className = "pillar-marquee"
        >
        {firstrow.map((image) => (
          <img src={image} alt="Professinal" class="img"></img>
        ))}
      </FastMarquee>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        gradient={false}
        direction="left"
        className = "pillar-marquee"
        >
        {secondrow.map((image) => (
          <img src={image} alt="Professional" class="img"></img>
        ))}
      </FastMarquee>
      </div>
    );
  };

export default Professional;
