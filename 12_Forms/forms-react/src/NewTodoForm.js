import React, { Component } from 'react'

class NewTodoForm extends Component {
  render() {
    return(
      <form>
        <label>New Todo</label>
        <div>
          <input />
          <button>ADD TODO</button>
        </div>
      </form>
    )
  }
}

export default NewTodoForm;