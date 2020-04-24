import React from 'react';
import Dog from './Dog';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dog />
      <div>I am another Div, not in dog component</div>
    </div>
  );
}

export default App;
