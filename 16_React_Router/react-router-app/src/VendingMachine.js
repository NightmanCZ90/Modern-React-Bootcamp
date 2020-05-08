import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Soda from './Soda'

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>Vending Machine page</h1>
        <Link exact to="/soda" >Soda</Link>
        <Link exact to="/chips" >Chips</Link>
        <Link exact to="/sardines" >Fresh Sardines</Link>
      </div>
    )
  }
}

export default VendingMachine
