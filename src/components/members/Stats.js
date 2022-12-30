import React from 'react';
import AnimatedNumber from "react-animated-numbers";
import "./style/stats.css";


// really just guessed stats + numbers feel free to change
//  wanted to make it easy by putting everything in state

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      fontSize: 60,
      duration: 1000,
      members: 70,
      majors: 15,
      jobs: 100,
      states: 100,
    };
  }

  render() {
    return (
      <div className = 'stat-container'>
        <div className='stat-values'>
            <div className = 'stat-item'>
              <div class="stat-number">
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
              <div class="stat-number">
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
              <div class="stat-number">
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
          <p>
            insert paragraph about how great our brothers are!
          </p>
        </div>
      </div>
    );
  }
}

export default Stats;
