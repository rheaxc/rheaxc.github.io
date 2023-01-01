import React from 'react';
import "./style/companies.css";
import FastMarquee from 'react-fast-marquee';

// TODO: RENAME IMAGE NAMES
// companies first row images are here:
import image1 from '../../images/members/companies/1.jpg';
import image2 from '../../images/members/companies/2.jpg';
import image3 from '../../images/members/companies/3.jpg';
import image4 from '../../images/members/companies/4.jpg';
import image5 from '../../images/members/companies/5.jpg';
import image6 from '../../images/members/companies/6.jpg';
import image7 from '../../images/members/companies/7.jpg';
import image8 from '../../images/members/companies/8.jpg';
import image9 from '../../images/members/companies/9.jpg';
import image10 from '../../images/members/companies/10.jpg';
import image11 from '../../images/members/companies/11.jpg';
import image12 from '../../images/members/companies/12.jpg';
import image13 from '../../images/members/companies/13.jpg';
import image14 from '../../images/members/companies/14.jpg';
import image15 from '../../images/members/companies/15.jpg';
import image16 from '../../images/members/companies/16.jpg';
import image17 from '../../images/members/companies/17.jpg';
import image18 from '../../images/members/companies/18.jpg';
import image19 from '../../images/members/companies/19.jpg';
import image20 from '../../images/members/companies/20.jpg';


const Companies = () => {
  const firstrow = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  const secondrow = [image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];

  return (
    <div class="company-container">
      <h2 className = "company-header"> We Work Here: </h2>
      <FastMarquee
        speed={60}
        delay={0}
        pauseOnHover
        direction="left"
        gradient={false}
        className= "company-marquee"
        >
        {firstrow.map((image) => (
          <img src={image} alt="companies" class="company-logo"></img>
        ))}
      </FastMarquee>
      </div>
    );
  };

export default Companies;
