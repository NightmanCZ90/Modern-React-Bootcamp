import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{task: 'Clean the House', isDone: false}]
    }
    this.createTodo = this.createTodo.bind(this);
  }
  remove(id) {
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }))
  }
  createTodo(todo) {
    this.setState(state => ({
      todos: [...this.state.todos, todo]
    }))
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={() => this.remove(todo.id)}
      />
    ))
    return(
      <div>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        {todos}
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    )
  }
}

export default TodoList;