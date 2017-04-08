import React, { Component } from 'react'

class Card extends Component {

  _click = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    let classState
    if (this.props.matched.includes(this.props.index)) {
      classState = `${this.props.items[this.props.index]} matched`
    } else if (this.props.turned.includes(this.props.index)) {
      classState = `${this.props.items[this.props.index]}`
    } else {classState = ``}

    let idInfo = ''
    if (this.props.easyMode) {
      idInfo = `${this.props.idInfo}`
    }

    return <div onClick={this._click} className={classState} id={idInfo}></div>
    }
  }


export default Card
