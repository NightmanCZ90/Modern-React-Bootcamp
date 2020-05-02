import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'

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
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox);
    this.setState({
      height: '',
      width: '',
      color: ''
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height' >Height </label>
          <input 
            name='height'
            id='height'
            type='number'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width' >Width </label>
          <input 
            name='width'
            id='width'
            type='number'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='color' >Color </label>
          <input 
            name='color'
            id='color'
            type='text'
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>
        <button>Add a new Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;