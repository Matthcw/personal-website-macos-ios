import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="background">

        <header id="header">
          <div>💪🏿️ Matthew Mukalere</div>
          <div></div>
          <div>Mon 4:30 AM</div>          
        </header>

        <div id="main-body">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          
        <footer id="footer">
          
        </footer>

      </div>
    );
  }
}

export default App;
