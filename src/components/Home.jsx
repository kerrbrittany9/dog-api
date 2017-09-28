import React from 'react';
import { Route } from 'react-router-dom';
import DogDisplay from './DogDisplay';
import Unsearched from './Unsearched';
import PageShell from './PageShell';
import './../index.css';

class Home extends React.Component {
  render() {
    return(
      // <div className="App">
      //   <Route path='/' exact component={PageShell(Unsearched)}></Route>
      //   <Route path='/display' exact component={PageShell(DogDisplay)}></Route>
      // </div>
    );
  }
}

export default Home;
