import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Dog from './Dog'

function App() {
  return (
    <div className="App">
      <Route path="/dog" component={Dog} />
    </div>
  );
}

export default App;
