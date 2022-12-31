import React from "react";
import ReactCardFlip from 'react-card-flip';
import "./style/committeeicon.css";

class CommitteeIcon extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      const { name, image, description } = this.props;
  
      return (
        <ReactCardFlip className= "Com-Icon" isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div className= "Com-item" onClick={this.handleClick}> 
            <div className="com-img" style={{ backgroundImage: `url(${image})`}} >
              <p className="com-name"> {name} </p>
            </div>
          </div>
          <div className="Com-item" onClick={this.handleClick}>
            <p>{description}</p>
          </div>
        </ReactCardFlip>
      )
    }
}
  
  export default CommitteeIcon;