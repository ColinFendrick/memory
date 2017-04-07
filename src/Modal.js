import React, { Component } from 'react'

class Modal extends Component {

  _reset = () => {
    this.props.reset()
  }

  render () {
    let victoryDialogue = ''
    if (this.props.victory.x === true) {
      victoryDialogue = 'Hey dummy, you won!'
    } else if (this.props.victory.x === false) {
      victoryDialogue = 'technicality no down boo over?'
    }

    return <div className='overlay'>
      <div className='dialog'>
        <p className='winnerInfo'>{victoryDialogue}</p>
        <button className='resetButton' onClick={this._reset}>Play again?</button>
      </div>
    </div>
  }
}

export default Modal
