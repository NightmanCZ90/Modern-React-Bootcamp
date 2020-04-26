import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Ball num={8} />
      <Ball num={1} />
      <Ball num={23} />
      <Ball num={45} />
    </div>
  );
}

export default App;
