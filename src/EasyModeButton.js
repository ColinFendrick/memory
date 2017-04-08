import React, { Component } from 'react'

class EasyModeButton extends Component {
  _click = () => {
    this.props.toggleEasyMode()
  }

  render () {
    let easyModeDialogue = 'Are you a dummy, dummy?'
    if (this.props.easyMode) {
      easyModeDialogue = 'You\'re not a dummy'
    }
    return <button className='easyModeButton' onClick={this._click}>{easyModeDialogue}</button>
  }
}

export default EasyModeButton
