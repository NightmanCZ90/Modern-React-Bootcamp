import React, {Component} from 'react';
import puppy from './puppy.jpg';
import './Dog.css';

class Dog extends Component {
  render(){
    return(
      <div className="Dog">
        <h1>DOG!</h1>
        <img className="Dog-img" src={puppy} />
      </div>
    )
  }
}

export default Dog;