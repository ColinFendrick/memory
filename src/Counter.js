import React, { Component } from 'react'

class Counter extends Component {

  render() {
    return <h1>{this.props.turnsLeft}</h1>
  }
}

export default Counter
