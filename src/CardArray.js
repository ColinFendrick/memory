import React, { Component } from 'react'
import Card from './Card'

class CardArray extends Component {

  render () {
    
    const items = this.props.state.items.map((item, i) => {
      return <Card items={this.props.state.items}
      turned={this.props.state.turned}
      matched={this.props.state.matched}
      easyMode={this.props.state.easyMode}
      idInfo={this.props.state.items[i]}
      key={i}
      index={i}
      flipCard={this.props.flipCard}
      />
    })
    return <div className='cardArray'>
      {items}
    </div>
  }
}

export default CardArray
