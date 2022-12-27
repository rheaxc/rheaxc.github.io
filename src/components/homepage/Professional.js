import React from 'react';
import './style/professional.css'


class Professional extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div class = "pillar-item">
          <div class = "pillar-title professional-title">
            Professional
          </div>
          <div class = "pillar-images professional-image-container">
            image 1
            image 2
            image 3
          </div>
        </div>
    );
  }
}

export default Professional;
