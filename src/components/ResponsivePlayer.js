import React, { Component } from 'react'
import ReactPlayer from 'react-player';

class ResponsivePlayer extends Component {
    constructor(props) {
        super(props)
    }
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={this.props.url}
            playing 
            controls
            loop={this.props.loopSetting ? true : false}
            config={{ 
                forceDASH: true,
                forceHLS: true 
            }}  
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }

  export default ResponsivePlayer