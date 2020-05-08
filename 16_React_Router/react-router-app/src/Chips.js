import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Message from './Message'

class Chips extends Component {
  render() {
    return (
      <div>
        <h1>Chips page</h1>
        <Message>
          <Link exact to="/" >Back</Link>
        </Message>
      </div>
    )
  }
}

export default Chips
