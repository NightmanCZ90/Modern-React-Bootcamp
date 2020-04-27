import React, { Component } from 'react'
import {choice} from './helpers'
import Coin from './Coin'
import './CoinFlipper.css'

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}, 
      {side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  constructor(props){
    super(props);
    this.state = {
      face: null,
      counter: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        face: newCoin,
        counter: st.counter + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0)

      };
    })
  };
  handleClick(){
    this.flipCoin();
  }
  render(){
    return(
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        {this.state.face && <Coin info={this.state.face} />}
        <button onClick={this.handleClick}>FLIP THE COIN</button>
        <p>Out of {this.state.counter} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
      </div>
    )
  }
}

export default CoinFlipper;