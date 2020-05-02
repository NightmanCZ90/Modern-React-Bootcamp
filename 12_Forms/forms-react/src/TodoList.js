import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{task: 'Clean the House', isDone: false}]
    }
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
      />
    ))
    return(
      <div>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        {todos}
        
      </div>
    )
  }
}

export default TodoList;