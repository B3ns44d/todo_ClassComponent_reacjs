import React, { Component } from "react";


export default class SearchPanel extends Component {
  state = {
    filter: "",
  };

  searchFilter = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.searchFilter}
      />
    );
  }
}
