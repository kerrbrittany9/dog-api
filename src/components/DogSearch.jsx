import React from 'react';
import { connect } from 'react-redux';

class DogSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Put dog here" ref="_dog"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(DogSearch);
