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
    this.create = this.create.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }
  create(box) {
    this.setState(state => ({
      boxes: [...this.state.boxes, box]
    }))
  }
  // renderBoxes() {
  //   return (
  //     <div>
  //       {this.state.boxes.map(box => (
  //         <Box />
  //       ))}
  //     </div>
  //   )
  // }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box 
        key={box.id} 
        box={box.id}
        height={box.height} 
        width={box.width} 
        color={box.color} 
        removeBox={() => this.remove(box.id)}
      /> 
    ))
    return(
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;