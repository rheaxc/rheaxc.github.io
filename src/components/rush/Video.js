import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style/video.css'

import rush_video1 from '../../images/videos/rush_vid1.mp4'
import rush_video2 from '../../images/videos/rush_vid2.mp4'
import rush_video3 from '../../images/videos/rush_vid3.mp4'


class Video extends Component {
    render () {
      return (
        <div className = "rush-video-containers">
          <div className = 'rush-video'>
            <div className='rush-video-wrapper'>
              <video className='video-item' width="300" height="500" autoplay muted controls >
                <source src={rush_video1} type="video/mp4"/>
              </video>
              <video className='video-item' width="300" height="500" autoplay muted  controls >
                <source src={rush_video2} type="video/mp4"/>
              </video>
              <video className='video-item' width="300" height="500" autoplay muted controls >
                <source src={rush_video3} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      )
    }
  }

  export default Video;
