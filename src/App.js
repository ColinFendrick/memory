import React, { Component } from 'react';
import CardArray from './CardArray'
import Music from './Music'
import Counter from './Counter'
import Modal from './Modal'

class App extends Component {
  state = {
    items : ['a0','b1','c2','d3','e4','f5','g6','h7','i8','j9','a0','b1','c2','d3','e4','f5','g6','h7','i8','j9'],
    turned: [],
    matched: [],
    gameOver: false,
    victory: false,
    turnsLeft: 1
  }

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
    if ((!this.state.gameOver) && (!this.state.matched.includes(i)) && (!this.state.turned.includes(i)) && (this.state.turnsLeft > 0)) {
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
           this.completeGame(true)
          }
        }
      )
    } else {
      setTimeout(() => {
        this.setState({
          turnsLeft: this.state.turnsLeft - 1
        }, () => {
          if (this.state.turnsLeft === 0) {
            setTimeout(() => this.completeGame(false), 150)
          }
        })
      }, 300)
    }
  }

  completeGame = (x) => {
    this.setState({gameOver : true, victory: x})
  }

  reset = () => {
    this.setState({items: this.shuffle(this.state.items),
    turned: [],
    matched: [],
    gameOver: false,
    victory: false,
    turnsLeft: 20})
  }

  render() {
    let modalState = 'App'
    if (this.state.gameOver === true) {
      modalState = 'App modal'
    }
    if (this.state.gameOver === false) {
      modalState = 'App'
    }

    return (
      <div className={modalState}>
        <h1>Memory Match</h1>
        <Counter turnsLeft={this.state.turnsLeft} />
        <CardArray state={this.state} flipCard={this.flipCard}/>
        <Music />
        <Modal reset={this.reset} victory={this.state.victory}/>
      </div>
    );
  }
}

export default App;
