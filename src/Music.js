import React, { Component } from 'react'
import starWarsSong from '../public/starwars-c_kjllrden.mp3'
import stringsOfLight from '../public/strings-of-light.mp3'
import metroidPrimeTheme from '../public/metroid-prime-theme.mp3'

class Music extends Component {


  render () {
    let song
    if (this.props.easyMode) {
      song = starWarsSong
    }
    if (this.props.godMode) {
      song = metroidPrimeTheme
    } else { song = stringsOfLight }

    return <audio autoPlay loop>
        <source src={song} type='audio/mp3' />
      </audio>
  }
}

export default Music
