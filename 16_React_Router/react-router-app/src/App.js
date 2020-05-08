import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <VendingMachine />} />
        <Route exact path="/chips" render={() => <Chips />} />
        <Route exact path="/soda" render={() => <Soda />} />
        <Route exact path="/sardines" render={() => <Sardines />} />
      </Switch>
    </div>
  );
}

export default App;
