import React, { Component } from 'react';
import './App.css';
import './Keith.css';
import BioPage from './BioPage.js';
import '@oreilly/shape-css/typography.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BioPage />
      </div>
    );
  }
}

export default App;