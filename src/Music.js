import React, { Component } from 'react'
import song from '../public/Yussef Kamaal - Strings Of Light_291005533_soundcloud.mp3'

class Music extends Component {

  render () {
    return <audio autoPlay='true' loop='true' controls='controls'>
        <source src={song} type='audio/mp3' />
      </audio>
  }
}

export default Music
