import React, { Component } from 'react'
import './Dog.css'

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h3>This dog is named: {this.props.name}</h3>
        <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      </div>
    )
  }
}

export default Dog
