import React, { Component } from 'react';
// import { fetchDog } from './../actions';
// import { connect } from 'react-redux';

const DogSearchForm = ({ display, history }) => {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  //
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   let { _dogSearch } = this.refs;
  //   if(!_dogSearch.value.trim()) {
  //     return;
  //   }
  //   this.props.dispatch(fetchDog(_dogSearch.value.trim()));
  //   _dogSearch.value = "";
  // }

  //  //onSubmit={this.handleSubmit} ref="_dogSearch"

  if(!display) {
    return (
      <div className="form">
        <form>
          <input placeholder="Put dog here" ></input>
          <button onClick={() => history.push('/display')}>Submit</button>
        </form>
      </div>
    )
  } else {
    return (
      <div className="form">
        <form>
          <button onClick={() => history.push('/')}>Search Again</button>
        </form>
      </div>
    );

  }
}

export default DogSearchForm;
