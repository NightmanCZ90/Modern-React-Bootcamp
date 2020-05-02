import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []}
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  remove(id) {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }
  create(newTodo) {
    this.setState(state => ({
      todos: [...this.state.todos, newTodo]
    }))
  }
  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, task: updatedTask}
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    this.setState({todos: updatedTodos})
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ))
    return(
      <div>
        <h1>Todo List!</h1>
        <p>A Simple React Todo List App</p>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList;