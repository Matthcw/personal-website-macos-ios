import React, { Component } from 'react';
import logo from './logo.svg';
import GridLayout from 'react-grid-layout';
import Draggable from 'react-draggable';
import './App.css';
import './styles-resize.css';
import './styles-gridlayout.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1200,
      height:1200,
      center: null,
      windows: []
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(prevState => ({ width: prevState.width - 10 }))
  //   }, 1000)
  // }
  updateDimensions() {

    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    
    this.setState({ width: width, height: height });
    this.setState({center: { x: width/2, y: height/2 }});
    this.setState({center: null});
    // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  onResize(layout, oldLayoutItem, layoutItem, placeholder) {
    // `oldLayoutItem` contains the state of the item before the resize.
    // You can modify `layoutItem` to enforce constraints.

    if (layoutItem.h < 3 && layoutItem.w > 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }

    if (layoutItem.h >= 3 && layoutItem.w < 2) {
      layoutItem.w = 2;
      placeholder.w = 2;
    }
  }


  render() {
    let aboutMeWindow = (<Draggable
    key="aboutme"
    axis="both"
    handle=".handle"
    defaultPosition={{ x: this.state.width/4, y: this.state.height/4 }}
    position={this.state.center}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div className="aWindow">
      <div className="handle"><span onClick={() => this.setState(prevState => ({windows: prevState.windows.filter((window) => window.name != "aboutme")}))}>X</span> O --</div>
      <div>Some information about me</div>
    </div>
  </Draggable>)

  let portfolioWindow = (<Draggable
    key="portfolio"
    axis="both"
    handle=".handle"
    defaultPosition={{ x: this.state.width/4, y: this.state.height/4 }}
    position={this.state.center}
    scale={1}
    onStart={this.handleStart}
    onDrag={this.handleDrag}
    onStop={this.handleStop}>
    <div className="aWindow">
      <div className="handle"><span onClick={() => this.setState(prevState => ({windows: prevState.windows.filter((window) => window.name != "portfolio")}))}>X</span> O --</div>
      <div>My cool portfolio</div>
    </div>
  </Draggable>)

  let windowArray = this.state.windows.map((window) => {
    if(window.name == "portfolio") {
      return portfolioWindow;
    } else if(window.name == "aboutme") {
      return aboutMeWindow;
    }
  })

    return (
      <div id="background">

        <header id="header">
          <div>💪🏿️ Matthew Mukalere</div>
          <div></div>
          <div>Mon 4:30 AM</div>
        </header>

        <div id="main-body">
          <GridLayout
            className="layout"
            cols={12}
            rowHeight={3}
            width={this.state.width}
            verticalCompact={false}>
            <div key="b" data-grid={{ x: 0, y: 0, w: 1, h: 10 }}>
              <img src={logo} className="App-logo" alt="logo" onClick={() => this.setState(prevState => ({windows: [...prevState.windows, {name:"portfolio"}]}))}/>
              <p>My Portfolio</p>
            </div>
            <div key="c" data-grid={{ x: 0, y: 4, w: 1, h: 10 }}>
              <img src={logo} className="App-logo" alt="logo" onClick={() => this.setState(prevState => ({windows: [...prevState.windows, {name:"aboutme"}]}))}/>
              <p>About Me</p>
            </div>
          </GridLayout>

          <div id="draggableArea">
              {windowArray}
            </div>
        </div>

        <footer id="footer">

        </footer>

      </div>
    );
  }
}

export default App;
