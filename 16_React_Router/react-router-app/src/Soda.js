import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Message from './Message'

class Soda extends Component {
  render() {
    return (
      <div>
        <h1>Soda page</h1>
        <Message>
          <Link exact to="/" >Back</Link>
        </Message>
      </div>
    )
  }
}

export default Soda
