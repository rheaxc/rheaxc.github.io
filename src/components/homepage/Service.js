import React from 'react';
import "./style/service.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import FastMarquee from 'react-fast-marquee';

//Service images are here:
import image1 from '../../images/homepage/service/1.jpg';
import image2 from '../../images/homepage/service/2.jpg';
import image3 from '../../images/homepage/service/3.jpg';
import image4 from '../../images/homepage/service/4.jpg';
import image5 from '../../images/homepage/service/5.jpg';
import image6 from '../../images/homepage/service/6.jpg';
import image7 from '../../images/homepage/service/7.jpg';
import image8 from '../../images/homepage/service/8.jpg';

//Sevice second row images are here:
import image9 from '../../images/homepage/service/9.jpg';
import image10 from '../../images/homepage/service/10.jpg';
import image11 from '../../images/homepage/service/11.jpg';
import image12 from '../../images/homepage/service/12.jpg';
import image13 from '../../images/homepage/service/13.jpg';
import image14 from '../../images/homepage/service/14.jpg';


const Service = () => {
  const firstrow = [image1, image2, image3, image4, image5, image6, image7];
  const secondrow = [image8, image9, image10, image11, image12, image13, image14];


  const mediaQuery = window.matchMedia('(max-width: 415px)')
  // Check if the media query is true
  if (mediaQuery.matches) {

    return (
      <div className="pillar-item">
        <div className="pillar-title service-title">
          SERVICE
        </div>
        <FastMarquee
          speed={20}
          delay={0}
          pauseOnHover
          gradient={false}
          direction="right"
          className = "mobile-pillar-marquee"
          >
          {firstrow.map((image) => (
            <img src={image} alt="service" className="img"></img>
          ))}
        </FastMarquee>
        <FastMarquee
          speed={20}
          delay={0}
          pauseOnHover
          gradient={false}
          direction="right"
          className = "mobile-pillar-marquee"
          >
          {secondrow.map((image) => (
            <img src={image} alt="service" className="img"></img>
          ))}
        </FastMarquee>
        </div>
    );
  } else {
    return (
      <div className="pillar-item">
        <div className="pillar-title service-title">
          SERVICE
        </div>
        <FastMarquee
          speed={60}
          delay={0}
          pauseOnHover
          gradient={false}
          direction="right"
          className = "pillar-marquee"
          >
          {firstrow.map((image) => (
            <img src={image} alt="service" className="img"></img>
          ))}
        </FastMarquee>
        <FastMarquee
          speed={60}
          delay={0}
          pauseOnHover
          gradient={false}
          direction="right"
          className = "pillar-marquee"
          >
          {secondrow.map((image) => (
            <img src={image} alt="service" className="img"></img>
          ))}
        </FastMarquee>
        </div>
      );
    };
  };

export default Service;
