import React, { Component } from 'react';
import CardArray from './CardArray'
import Music from './Music'
import Counter from './Counter'
import Modal from './Modal'
import EasyModeButton from './EasyModeButton.js'
import CheatHandler from './CheatHandler.js'

class App extends Component {
  state = {
    items : ['a0','b1','c2','d3','e4','f5','g6','h7','i8','j9','a0','b1','c2','d3','e4','f5','g6','h7','i8','j9'],
    turned: [],
    matched: [],
    gameOver: false,
    victory: false,
    turnsLeft: 1,
    easyMode: false,
    godMode: 0,
    cheatCodeValue: 'Bikini Samus?',
    konami: []
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
          turnsLeft: this.state.turnsLeft - 1 + this.state.godMode
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
      turnsLeft: 20,
      godMode: 0,
      cheatCodeValue: 'Bikini Samus?',
      konami: []
    })
  }

  // testing the git add

  toggleEasyMode = () => {
    if (this.state.items.length === 20) {
      this.setState({items:
        this.shuffle(['a0','b1','c2','d3','e4','a0','b1','c2','d3','e4']),
        turned: [],
        matched: [],
        gameOver: false,
        victory: false,
        easyMode: true,
        konami: []
      })

    } else {
      this.setState({items:
        this.shuffle(['a0','b1','c2','d3','e4','f5','g6','h7','i8','j9','a0','b1','c2','d3','e4','f5','g6','h7','i8','j9']),
        turned: [],
        matched: [],
        gameOver: false,
        victory: false,
        easyMode: false,
        konami: []
      })
    }
  }

  changeCheatCodeValue = (e) => {
    this.setState({cheatCodeValue: e})
    setTimeout(() => this.checkCheat(), 150)
  }

  checkCheat = () => {
    if (this.state.cheatCodeValue.toLowerCase() === 'justin bailey') { this.toggleGodMode(true)
    } else {this.toggleGodMode(false)}
  }

  toggleGodMode = (x) => {
    if (!x) {
      this.setState({godMode: 0})
    } else {
      this.setState({godMode: 1})
      alert('Cheaters never win')
    }
  }

  startKonami = (e) => {
    if ((this.state.konami.length === 9) && (e.keyCode === 65)) {
      this.setState({konami:
        this.state.konami.concat(e.keyCode)
      })
      this.checkKonami()
    } else if (e.keyCode === 37 || 38 || 39 || 40 || 66 || 65) {
      this.setState({konami:
        this.state.konami.concat(e.keyCode)
      })
    }
    if (this.state.konami.length === 10) {
      this.setState({konami: []})
    }
  }

  checkKonami = () => {
    let konamiArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
    let trueCounter = 0
    for (var i = 0; i < this.state.konami.length; i++) {
      if (this.state.konami[i] === konamiArray[i]) {
        trueCounter++
      }
    }
    if (trueCounter === 10) {
      this.setState({turnsLeft: 30})
    }
    if (this.state.konami.length === 10) {
      trueCounter = 0
    }
  }


  render() {

    let modalState = 'App'
    if (this.state.gameOver) {
      modalState = 'App modal'
    }

    window.addEventListener('keydown', this.startKonami)

    return (
      <div className={modalState} onKeyDown={this.startKonami}>
        <h1>Memory Match</h1>
        <Counter turnsLeft={this.state.turnsLeft} godMode={this.state.godMode} />
        <CardArray state={this.state} flipCard={this.flipCard} />
        <EasyModeButton toggleEasyMode={this.toggleEasyMode} easyMode={this.state.easyMode} />
        <Music easyMode={this.state.easyMode} godMode={this.state.godMode} />
        <Modal reset={this.reset} victory={this.state.victory} />
        <CheatHandler cheatCodeValue={this.state.cheatCodeValue} changeCheatCodeValue={this.changeCheatCodeValue} godMode={this.state.godMode} />
      </div>
    );
  }
}

export default App;
