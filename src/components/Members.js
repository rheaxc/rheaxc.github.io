import React from 'react';
import Companies from './members/Companies';
import Stats from './members/Stats';
import Committees from './members/Committees.js';

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
        <Committees/>
      </div>
    );
  }
}

export default Members;
