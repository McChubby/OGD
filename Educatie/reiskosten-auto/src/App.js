import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function closeNav(){
  console.log('Boom baby!');
}

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App-container">
        <div className="App-navbar">
          <div className="App-navbar-toggle" onClick={closeNav}>X</div>
          navbar
        </div>
        <div className="App-content">
          content
        </div>
      </div>
    );
  }
}

export default App;
