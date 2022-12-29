import React from 'react';
import AnimatedNumber from "react-animated-numbers";
import Companies from './members/Companies';
import Stats from './members/Stats';

import '../style/members.css'

class Members extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="members">
        <Stats />
        <Companies/>
      </div>
    );
  }
}

export default Members;
