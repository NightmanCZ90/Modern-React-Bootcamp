import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Chips extends Component {
  render() {
    return (
      <div>
        <h1>Chips page</h1>
        <Link exact to="/" >Back</Link>
      </div>
    )
  }
}

export default Chips
