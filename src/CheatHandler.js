import React, { Component } from 'react'

class CheatHandler extends Component {

  _change = (e) => {
    this.props.changeCheatCodeValue(e.target.value)
  }

  render () {
    return (<div><input value={this.props.cheatCodeValue} onChange={this._change} name='cheatCode'/></div>)
  }
}

export default CheatHandler
