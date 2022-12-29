import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style/video.css'

import rush_video1 from '../../images/videos/rush_vid1.mov'
import rush_video2 from '../../images/videos/rush_vid2.mov'
import rush_video3 from '../../images/videos/rush_vid3.MOV'


class Video extends Component {
    render () {
      return (
        <div className = "rush-video-containers">
          <div className = 'rush-video'>
            <div className='rush-video-wrapper'>
              <ReactPlayer
                className='react-player'
                url= 'https://www.youtube.com/watch?v=XE1257ozYB0'
                width='50%'
                height='100%'
                controls = {true}
              />
            </div>
          </div>
        </div>
      )
    }
  }

  export default Video;
