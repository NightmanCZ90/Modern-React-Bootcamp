import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }
  handleLogin(evt) {
    alert("you have been logged in")
    this.props.history.push("/food/salmon")
  }
  handleBack(evt) {
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin} >Log In</button>
        <button onClick={this.handleBack} >Go back</button>
      </div>
    )
  }
}

export default withRouter(Navbar)
