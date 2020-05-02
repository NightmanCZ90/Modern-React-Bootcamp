import React, { Component } from 'react'

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: ''
    }
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
    this.props.addBox(this.state);
    this.setState({
      height: '',
      width: '',
      color: ''
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label >Height</label>
        <input 
          name='height'
          type='number'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label >Width</label>
        <input 
          name='width'
          type='number'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label >Color</label>
        <input 
          name='color'
          type='text'
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button>Add a new Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;