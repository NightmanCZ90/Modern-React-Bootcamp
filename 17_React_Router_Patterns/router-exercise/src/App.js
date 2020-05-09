import React from 'react';
import DogList from './DogList'
import DogDetails from './DogDetails'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import whiskey from './images/whiskey.jpg'
import tubby from './images/tubby.jpg'
import hazel from './images/hazel.jpg'
import './App.css';


function App(props) {
  const getDog = data => {
    let name = data.match.params.name
    let currentDog = props.dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    )
    return <DogDetails {...props} dog={currentDog} />
  }
  return (
    <div className="App">
      <Navbar dogs={props.dogs} />
      <Switch>
        <Route 
          exact 
          path="/dogs" 
          render={() => <DogList dogs={props.dogs} />} 
        />
        <Route 
          exact 
          path="/dogs/:name" 
          render={getDog} 
        />

      </Switch>
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
