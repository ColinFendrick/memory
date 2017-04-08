import React, { Component } from 'react'

class Modal extends Component {

  _resetGame = () => {
    this.props.reset()
  }

  render () {
    let victoryDialogue = ''
    if (this.props.victory) {
      victoryDialogue = <img src='https://media.makeameme.org/created/your-cool-just.jpg' alt='you won?' className='endPic winnerPic' />
    } else {
      victoryDialogue = <img src='https://media.makeameme.org/created/you-lost-dummy-n7nnuf.jpg' className='endPic loserPic' alt='you lost' className='endPic loserPic'/>
    }

    return <div className='overlay'>
      <div className='dialog'>
        <p className='winnerInfo'>{victoryDialogue}</p>
        <button className='resetButton' onClick={this._resetGame}>Play again?</button>
      </div>
    </div>
  }
}

export default Modal
