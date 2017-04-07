import React, { Component } from 'react';
import CardArray from './CardArray'

class App extends Component {
  state = {
    items : ['a0','b1','c2','d3','e4','f5','g6','h7','i8','j9','a0','b1','c2','d3','e4','f5','g6','h7','i8','j9'],
    turned: [],
    matched: [],
    won: false,
    turnsLeft: 40
  }
// This function works to shuffle, now just do it only on reloads
  shuffle = (arr) => {
    for (let i = arr.length-1; i >=0; i--) {

        let randomIndex = Math.floor(Math.random()*(i+1))
        let itemAtIndex = arr[randomIndex]

        arr[randomIndex] = arr[i]
        arr[i] = itemAtIndex
    }
    return arr;
}

  flipCard = (i) => {
    if ((!this.state.won) && (!this.state.matched.includes(i)) && (!this.state.turned.includes(i)) && (this.state.turnsLeft > 0)) {
      this.setState({turnsLeft: --this.state.turnsLeft})
      if (this.state.turnsLeft === 0) {
        this.won()
      }
      if (this.state.turned.length === 0) {
        this.setState({turned: [i]})
      } else if (this.state.turned.length === 1) {
        this.setState({turned: this.state.turned.concat(i)}, () => {
          this.check(this.state.turned[0], this.state.turned[1])
        })
        setTimeout(() => {
          this.setState({turned : []})
        }, 300)
      }
    }
  }

  check = (a, b) => {
    if (this.state.items[a] === this.state.items[b] && (a !== b)) {
      this.setState({matched: this.state.matched.concat(a, b)}, () =>  {
         if (this.state.items.length === this.state.matched.length) {
           this.won()
          }
        }
      )
    }
  }

  won = () => {
    this.setState({won: true})
  }

  render() {
    // this.setState({items:     this.shuffle(this.state.items)})
    return (
      <div className="App">
        <h1>Memory Match</h1>
        <CardArray items={this.state.items} turned={this.state.turned} matched={this.state.matched} flipCard={this.flipCard}/>
        <audio autoPlay='true' controls='controls' loop='true'>
          <source src='../public/Yussef Kamaal - Strings Of Light_291005533_soundcloud.mp3' type='audio/mpeg' />
        </audio>
      </div>
    );
  }
}

export default App;
