import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio.js';

export default class App extends Component {
  render() {
    let portrait = "https://ca.slack-edge.com/T02540DGA-U0JCA4317-g0169d2f003a-72";
    let bullets = [
      "Works on Expectnation, the conferences app",
      "Tries not to react too sharply"
    ];
    return (
      <div className="App">
        <Bio name="Marcel M. Cary" portrait={portrait} bullets={bullets} />
      </div>
    );
  }
}

// export default App;