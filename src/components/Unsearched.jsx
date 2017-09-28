import React, { Component } from 'react';
import DogSearchForm from './DogSearchForm';

class Unsearched extends Component {
  render() {
    return(
      <div>
        <h2>Want to find the cutest dog?</h2>
        <p>We can help you out!</p>
        <DogSearchForm {...this.props} />
      </div>
    )
  }
}
export default Unsearched;
