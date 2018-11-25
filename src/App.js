import React, { Component } from 'react';
import './App.css';
import './css/responsive/page-responsive.css'
import Home from './components/Home';
import { Route } from 'react-router-dom'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>

        {/* <Route exact path="/" render={() => (
          <Home
          />
        )} /> */}

      </div>
    );
  }
}

export default App;
