import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="background">
        <header id="header">
          {/* <span>:)</span> */}
          <span>4:30am</span>
          {/* <span>Matthew Mukalere</span> */}
        </header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default App;
