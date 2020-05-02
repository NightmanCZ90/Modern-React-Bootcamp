import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = {...this.state, id: uuid()};
    this.props.createTodo(newTodo);
    this.setState({
      task: ''
    })
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>New Todo</label>
        <div>
          <input 
            name='task'
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm;