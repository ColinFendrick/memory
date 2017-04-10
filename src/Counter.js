import React, { Component } from 'react'

class Counter extends Component {

  render() {
    
    let healthName = 'health'
    if (this.props.godMode) {
      healthName = 'healthGod'
    }
    let newArray = Array.from({length: this.props.turnsLeft}, (_, i) => i)
    const healthBar = newArray.map((i) => {
      return <div className={healthName} key={i}></div>
    })

    return <div className='healthBar'>{healthBar}</div>
  }
}

export default Counter
