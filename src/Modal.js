import React, { Component } from 'react'

class Modal extends Component {

  _reset = () => {
    this.props.reset()
  }
  
  render () {
    let victoryDialogue = ''
    if (this.props.victory === true) {
      victoryDialogue = <img src='https://media.makeameme.org/created/your-cool-just.jpg' alt='you won?' className='endPic winnerPic' />
    } else if (this.props.victory === false) {
      victoryDialogue = <img src='https://media.makeameme.org/created/you-lost-dummy-n7nnuf.jpg' className='endPic loserPic' alt='you lost' className='endPic loserPic'/>
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
