import React, { Component } from 'react';
import { fetchDog } from './../actions';
import { connect } from 'react-redux';

class DogSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { _dogSearch } = this.refs;
    if(!_dogSearch.value.trim()) {
      return;
    }
    this.props.dispatch(fetchDog(_dogSearch.value.trim()));
    _dogSearch.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Put dog here" ref="_dogSearch"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(DogSearch);
