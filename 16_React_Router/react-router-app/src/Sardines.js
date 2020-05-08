import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines page</h1>
        <Link exact to="/" >Back</Link>
      </div>
    )
  }
}

export default Sardines
