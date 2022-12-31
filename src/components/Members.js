import React from 'react';
import Companies from './members/Companies';
import Stats from './members/Stats';
import Committees from './members/Committees.js';
import Footer from './Footer.js'

import members from '../images/footer/members.jpg'


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
        <Footer page='members' image={members}/>
      </div>
    );
  }
}

export default Members;
