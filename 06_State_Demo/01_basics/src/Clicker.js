import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = {num: 1};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let rand = Math.floor(Math.random() * this.props.maxNum);
    this.setState({num: rand})
  }
  render(){
    return(
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 
          ? <h3>YOU WON!!!</h3> 
          : <button onClick={this.handleClick}>Random Number</button>
        }
      </div>
    )
  }
}

export default Clicker;