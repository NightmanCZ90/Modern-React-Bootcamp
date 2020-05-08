import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Food from './Food';
import Meal from './Meal'

function App() {
  return (
    <div className="App">
      <Route 
        exact 
        path="/food/:name" 
        // render={(routeProps) => <Food name={routeProps.match.params.name} stuff={routeProps} />} 
        render={(routeProps) => <Food {...routeProps} />} 
      />
      <Route 
        exact 
        path="/food/:foodName/drink/:drinkName" 
        component={Meal} 
      />
    </div>
  );
}

export default App;
