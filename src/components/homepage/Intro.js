import React from 'react';
import Typed from 'react-typed';


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      strings: ["brotherhood", "philanthropy organization", "professional community", "family"]
    };
}

  render() {
    return (
      <div class = "intro">
        <p> More than a fraternity, we are a&nbsp;
        <span class = "red" >
          <Typed
            strings =  {this.state.strings}
            typeSpeed = {70}
            backSpeed = {70}
          >
          </Typed>
        </span>
        </p>
      </div>
    );
  }
}

export default Intro;
