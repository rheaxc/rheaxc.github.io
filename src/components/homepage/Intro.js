import React from 'react';
import Typed from 'react-typed';
import "./style/intro.css"


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      strings: ["brotherhood", "philanthropy organization", "professional community", "society of engineers", "family"]
    };
}

  render() {
    return (
      <div className = "intro">
        <p> More than a fraternity, we are a&nbsp;
        <span className = "red" >
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
