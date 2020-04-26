import React, { Component } from 'react'

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0}
  }

  render(){
    return(
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button>Single Kill!</button>
      </div>
    )
  }
}

export default ScoreKeeper;