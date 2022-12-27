import React from 'react';
import './style/service.css'

class Service extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div class = "pillar-item">
          <div class = "pillar-title service-title">
            Service
          </div>
          <div class = "pillar-images service-image-container">
            image 1
            image 2d
            image 3
          </div>
        </div>
    );
  }
}

export default Service;
