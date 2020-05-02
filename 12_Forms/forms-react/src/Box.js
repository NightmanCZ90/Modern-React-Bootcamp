import React, { Component } from 'react'

class Box extends Component {
  render() {
    return(
      <div 
        height={this.height}
        width={this.width}
        color={this.color}
      >
      </div>
    )
  }
}

export default Box;