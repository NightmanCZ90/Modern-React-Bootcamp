import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(this.state.username);
    this.setState({username: ''})
  }
  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='username'
            type='text' 
            value={this.state.username} 
            onChange={this.handleChange} 
          />
          <input 
            name='email'
            type='email' 
            placeholder='email' 
            value={this.state.email} 
            onChange={this.handleChange} 
          />
          <input 
            name='password'
            type='password' 
            placeholder='password' 
            value={this.state.password} 
            onChange={this.handleChange} 
          />
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}

export default Form;