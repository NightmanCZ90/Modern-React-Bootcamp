import React from 'react';
import Game from './Game';
import Demo from './Demo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game color="purple" />
      <Demo animal="Bobcat" food="Pineapple" />
    </div>
  );
}

export default App;
