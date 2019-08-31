import React, { Component } from 'react';
import logo from './logo.svg';
import GridLayout from 'react-grid-layout';
import './App.css';
import './styles-resize.css';
import './styles-gridlayout.css';

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
          <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React</p>
          <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
        <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
        <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
      </GridLayout>
          </div>
          
        </div>
          
        <footer id="footer">
          
        </footer>

      </div>
    );
  }
}

export default App;
