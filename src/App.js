import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Bridal Party Trivia!</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
