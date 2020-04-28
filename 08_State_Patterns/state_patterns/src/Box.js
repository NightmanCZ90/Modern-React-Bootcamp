import React, { Component } from 'react'
import {randomColor} from './helpers'
import './Box.css'

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {color: randomColor()};
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick(){
    this.setState({color: randomColor()})
  }
  render(){
    return(
      <div 
        className="Box" 
        onClick={this.handleClick}
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}

export default Box;