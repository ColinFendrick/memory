import React, { Component } from 'react'
import song from '../public/starwars-c_kjllrden.mp3'

class Music extends Component {

  render () {
    return <audio autoPlay loop>
        <source src={song} type='audio/mp3' />
      </audio>
  }
}

export default Music
