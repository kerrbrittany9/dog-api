import React from 'react';
import DogSearch from './DogSearch';
import { connect } from 'react-redux';


const DogDisplay = ({ dispatch, dog })=> {
  return (
    <div>
      <DogSearch/>
      <br/>
      <p>Your results for {dog.dogSearch}</p>
      <img src={dog.dog}/>
    </div>
  );
}


const mapStateToProps = state => {
  console.log(state);
  const dog = state;
  return {
    dog: dog
  };
};

export default connect(mapStateToProps)(DogDisplay);
