import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import uuid from 'uuid/dist/v4'

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{height: 10, width: 10, color: 'purple'}]
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
          <Box />
        ))}
      </div>
    )
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box height={box.height} width={box.width} color={box.color} /> 
    ))
    return(
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm />
        {boxes}
      </div>
    )
  }
}

export default BoxList;