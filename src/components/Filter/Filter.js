import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleQuery = e => {
    const query = e.currentTarget.value;
    this.setState({ filter: e.currentTarget.value });
    // console.log(query);
    this.props.onChange(query);
  };

  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" onChange={this.handleQuery} value={this.state.filter} />
      </>
    );
  }
}

// Filter.propTypes = {
//   queryHandler: PropTypes.func.isRequired,
// };

export default Filter;
