import React from 'react';
import DogSearch from './DogSearch';
import { connect } from 'react-redux';

const DogDisplay = ({ dispatch, dog })=> {
  return (
    <div>
      <DogSearch/>
    </div>
  );
}

const mapStateToProps = state => {
  const dog = state;
  return {
    dog: dog
  };
};

export default connect(mapStateToProps)(DogDisplay);
