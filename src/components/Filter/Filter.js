import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
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
        <label>
          <input type="text" name="filter" onChange={this.handleQuery} value={this.state.filter} />
          <BiSearchAlt size="18" />
        </label>
      </>
    );
  }
}

export default Filter;
