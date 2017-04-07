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

    return <div onClick={this._click} className={classState}></div>
    }
  }


export default Card
