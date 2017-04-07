import React, { Component } from 'react';
import Card from './Card'

class CardArray extends Component {

  render () {
    const items = this.props.items.map((item, i) => {
      return <Card items={this.props.items} turned={this.props.turned} matched={this.props.matched} key={i} index={i} flipCard={this.props.flipCard} />
    })
    return <div className='cardArray'>
      {items}
    </div>
  }
}

export default CardArray
