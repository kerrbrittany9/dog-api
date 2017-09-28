import React, { Component } from 'react';
import DogSearchForm from './DogSearchForm';
import { connect } from 'react-redux';

class DogDisplay extends React.Component {

// const DogDisplay = ({ dispatch, dog })=> {
  // console.log(dog);
  // let formAreaContent;
  // if (dog.dogId === 0) {
  //   formAreaContent =
  //     <div>
  //       <p>A dog will be here soon.</p>
  //     </div>
  // } else {
  //   formAreaContent =
  //     <div>
  //       <p>Your results for {dog.dogSearch}</p>
  //       <img src={dog.dog}/>
  //     </div>
  // }
  // {...this.props} ??

  render() {
    return (
      <div>
        <p>Do it again!</p>
        <DogSearchForm display={true} {...this.props}/>
        <br/>
      </div>
    )
}
}
const mapStateToProps = state => {
  console.log(state);
  const dog = state;
  return {
    dog: dog
  };
};

export default connect(mapStateToProps)(DogDisplay);
