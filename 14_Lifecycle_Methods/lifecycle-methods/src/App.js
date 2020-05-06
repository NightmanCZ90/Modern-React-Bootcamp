import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username='NightmanCZ90' />
    </div>
  );
}

export default App;
