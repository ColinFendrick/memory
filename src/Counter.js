import React, { Component } from 'react'

class Counter extends Component {

  render() {
    let newArray = Array.from({length: this.props.turnsLeft}, (_, i) => i)
    const healthBar = newArray.map((i) => {
      return <div className='health' key={i}></div>
    })

    return <div className='healthBar'>{healthBar}</div>
  }
}

export default Counter
