import React, { Component } from 'react'
import uuid from 'uuid/dist/v4'
import './NewTodoForm.css'

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
    const newTodo = {...this.state, id: uuid(), completed: false};
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
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <div>
          <input 
            id='task'
            name='task'
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
            placeholder='add task'
          />
          <button>Add Todo</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm;