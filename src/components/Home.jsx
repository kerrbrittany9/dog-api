import React from 'react';
import { Route } from 'react-router-dom';
import DogDisplay from './DogDisplay';
import DogSearch from './DogSearch';
import PageShell from './PageShell';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Route path='/' exact component={PageShell(DogSearch)}></Route>
        <Route path='/display' exact component={PageShell(DogDisplay)}></Route>
      </div>
    );
  }
}

export default Home;
