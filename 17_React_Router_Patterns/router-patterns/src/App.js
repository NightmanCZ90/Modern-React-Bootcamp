import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import FoodSearch from './FoodSearch'
import Food from './Food';
import Meal from './Meal'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route 
        exact 
        path="/" 
        component={FoodSearch}
        />
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
        <Route render={() => <h1>ERROR NOT FOUND</h1>} />
      </Switch>
    </div>
  );
}

export default App;
