import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return(
      <div>
        <span>{this.props.task}</span>
        <span onClick={this.props.remove}>X</span>
      </div>
    )
  }
}

export default Todo;