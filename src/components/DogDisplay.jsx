import React, { Component } from 'react';
import DogSearch from './DogSearch';
import { connect } from 'react-redux';


const DogDisplay = ({ dispatch, dog })=> {
  console.log(dog);
  let formAreaContent;
  if (dog.dogId === 0) {
    formAreaContent =
      <div>
        <p>A dog will be here soon.</p>
      </div>
  } else {
    formAreaContent =
      <div>
        <p>Your results for {dog.dogSearch}</p>
        <img src={dog.dog}/>
      </div>
  }
  return (
    <div>
      <DogSearch/>
      <br/>
      {formAreaContent}
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
