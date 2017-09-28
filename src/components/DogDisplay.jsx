import React from 'react';
import DogSearch from './DogSearch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DogDisplay = ({ dispatch, dog })=> {
  return (
    <div>
      <DogSearch/>
    </div>
  );
}

DogDisplay.propTypes = {
  dog: PropTypes.object
};

const mapStateToProps = state => {
  const dog = state;
  return {
    dog: dog
  };
};

export default connect(mapStateToProps)(DogDisplay);
