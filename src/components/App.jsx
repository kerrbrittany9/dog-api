import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Unsearched from './Unsearched';
import DogDisplay from './DogDisplay';
import PageShell from './PageShell';
// import Home from './Home';
import './../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={PageShell(Unsearched)}></Route>
        <Route path='/display' exact component={PageShell(DogDisplay)}></Route>
      </div>
    );
  }
}

export default App;
