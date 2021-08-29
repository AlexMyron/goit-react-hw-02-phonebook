import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Label } from './Filter.styled';
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
      <div>
        <h3>Find contacts by name</h3>
        <Label>
          <input type="text" name="filter" onChange={this.handleQuery} value={this.state.filter} />
          <BiSearchAlt size="18" />
        </Label>
      </div>
    );
  }
}

export default Filter;
