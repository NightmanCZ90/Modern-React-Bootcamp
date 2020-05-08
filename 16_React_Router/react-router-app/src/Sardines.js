import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Message from './Message'

class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines page</h1>
        <Message>
          <h2>I do not like them</h2>
        </Message>
        <Message>
          <Link exact to="/" >Back</Link>
        </Message>
      </div>
    )
  }
}

export default Sardines
