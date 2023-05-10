import React from 'react';
import AnimatedNumber from "react-animated-numbers";
import "./style/stats.css";


// really just guessed stats + numbers feel free to change
//  wanted to make it easy by putting everything in state

class Stats extends React.Component {
  constructor() {
    super();

    const mediaQuery = window.matchMedia('(max-width: 415px)')
  // Check if the media query is true
    if (mediaQuery.matches) {
      this.state = {
        fontSize: 40,
        duration: 1000,
        members: 70,
        majors: 15,
        jobs: 100,
        states: 100,
      };
    } else {
      this.state = {
        fontSize: 60,
        duration: 1000,
        members: 70,
        majors: 15,
        jobs: 100,
        states: 100,
      };
    };
  }

  render() {
    return (
      <div className = 'stat-container'>
        <div className='stat-values'>
            <div className = 'stat-item'>
              <div className="stat-number">
                  <h1 className = "stat-plus"> + </h1>
                <AnimatedNumber
                  animateToNumber={this.state.members}
                  fontStyle={{ fontSize: this.state.fontSize }}
                  duration={this.state.duration}
                />
              </div>
              <p className ="stat-caption"> Active Members </p>
            </div>
            <div className = 'stat-item'>
              <div className="stat-number">
                <h1 className = "stat-plus"> + </h1>
                <AnimatedNumber
                  animateToNumber={this.state.majors}
                  fontStyle={{ fontSize: this.state.fontSize }}
                  duration={this.state.duration}
                />
              </div>
              <p className ="stat-caption"> Different Majors </p>
            </div>
            <div className = 'stat-item'>
              <div className="stat-number">
                <h1 className = "stat-plus"> % </h1>
                <AnimatedNumber
                  animateToNumber={this.state.jobs}
                  fontStyle={{ fontSize: this.state.fontSize }}
                  duration={this.state.duration}
                />
              </div>
              <p className ="stat-caption"> Employment Rate </p>
            </div>
        </div>
        <div className = 'stat-paragraph'>
          <p className='subheader-1'>
          <h1 className='subheader-sub'>Theta Tau is</h1> first and foremost a <b>brotherhood</b> of
            engineers. Being a brother of Theta Tau means that you
            have a community of brilliant men AND women not only on
            campus, but across the country that will see you as
            family. Being a brother means you hold a strong
            connection to a broad network of other engineers - a
            network that permeates through your academic,
            professional, and social life.
          </p>
          <p className='subheader-1'>
            This network is a support structure that you can rely on
            in the face of struggles that you will face in your
            college career. Being a brother means being part of a
            community that you can depend on beyond the campus and
            throughout your life. Being a brother means building
            deep relationships with a diverse group of people who
            hold vast reservoir of insight and experience in many
            areas of life. The wealth of these experiences enrich
            your life and teach you lessons that you can't learn
            from the classroom or even a job. Being a brother means
            building a college experience that is incredibly unique
            and valuable.
          </p>
          <p className='subheader-1'>
            When you ask someone why they joined Theta Tau,
            you'll probably get a diverse set of answers. Some
            join because they seek professional growth. Others
            join to meet more engineers in their major and
            across disciplines. Some are attracted to networking
            opportunities, or have heard that Theta Tau is the
            oldest and largest Professional Engineering
            Fraternity in the country.
          </p>
          <p className='subheader-1'>
            However, when you ask someone why they stayed, and
            continue to participate in the Fraternity, you'll
            likely ever hear one answer. <b>It's the people</b>.
            Among all other things, it's the people, their
            values and their culture that make your college
            experience, and what you will remember years after
            you graduate. And this is especially true with Theta
            Gamma Chapter, which is made of some of the most
            diverse and extraordinary engineers you will ever
            meet. These people are going places.
          </p>
        </div>
      </div>
    );
  }
}

export default Stats;
