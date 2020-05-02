import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import uuid from 'uuid/dist/v4'

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this);
  }
  addBox(box) {
    let newBox = {...box, id: uuid()}
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }))
  }
  renderBoxes() {
    return (
      <div>
        {this.state.boxes.map(box => (
          <Box 
            style="backgroundColor: {this.color}"
          />
        ))}
      </div>
    )
  }
  render() {
    return(
      <div>
        <NewBoxForm />
      </div>
    )
  }
}

export default BoxList;