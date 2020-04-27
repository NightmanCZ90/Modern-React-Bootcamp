import React, { Component } from 'react'
import Coin from './Coin'
import './CoinFlipper.css'

class CoinFlipper extends Component {
  static defaultProps = {
    heads: "https://tinyurl.com/react-coin-heads-jpg",
    tails: "https://tinyurl.com/react-coin-tails-jpg"
  }
  constructor(props){
    super(props);
    this.state = this.props.heads
  }
  render(){
    return(
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        <Coin face={this.state}/>
        <button>FLIP THE COIN</button>
      </div>
    )
  }
}

export default CoinFlipper;