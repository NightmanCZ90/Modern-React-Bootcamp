import React from 'react';
import DogList from './DogList'
import { Switch, Route } from 'react-router-dom'
import whiskey from './images/whiskey.jpg'
import tubby from './images/tubby.jpg'
import hazel from './images/hazel.jpg'
import './App.css';


function App(props) {
  return (
    <div className="App">
      <Route path="/dogs" render={() => <DogList dogs={props.dogs} />} />
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
};



export default App;
