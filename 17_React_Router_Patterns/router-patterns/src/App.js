import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Route 
        exact 
        path="/food/:name" 
        // render={(routeProps) => <Food name={routeProps.match.params.name} stuff={routeProps} />} 
        render={(routeProps) => <Food {...routeProps} />} 
      />
    </div>
  );
}

export default App;
