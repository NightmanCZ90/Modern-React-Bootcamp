import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Message from './Message'
import Soda from './Soda'

class VendingMachine extends Component {
  render() {
    return (
      <div>
          <h1>Vending Machine page</h1>
        <Message>
          <h2>Do you have any snack?</h2>
        </Message>
        <Message> 
          <Link exact to="/soda" >Soda</Link>
          <Link exact to="/chips" >Chips</Link>
          <Link exact to="/sardines" >Fresh Sardines</Link>
        </Message>
      </div>
    )
  }
}

export default VendingMachine
