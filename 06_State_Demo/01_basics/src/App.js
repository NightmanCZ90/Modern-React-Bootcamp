import React from 'react';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrokenClick2';
import Clicker from './Clicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clicker maxNum={10} />
    </div>
  );
}

export default App;
