import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Home></Home>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

      </div>
    );
  }
}

export default App;
