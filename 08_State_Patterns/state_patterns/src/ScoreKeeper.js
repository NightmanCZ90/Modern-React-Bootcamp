import React, { Component } from 'react'

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  singleKill(e){
    this.setState(st => {return {score: st.score + 1}})
  }
  tripleKill(e){
    this.setState(st => {return {score: st.score + 3}})
  }

  render(){
    return(
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    )
  }
}

export default ScoreKeeper;