import React from 'react';
import AnimatedNumber from "react-animated-numbers";

class Members extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="members">
        <div className='stats'>
          <AnimatedNumber
            value={100}
            duration={2000}
            formatValue={n => `${n}+`}
          />
         <AnimatedNumber
            value={100}
            duration={2000}
            formatValue={n => `${n}+`}
          />
        </div>
      </div>
    );
  }
}

export default Members;
