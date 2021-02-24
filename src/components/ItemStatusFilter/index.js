import React, { Component } from "react";


export default class ItemStatusFilter extends Component {
  render() {
    const { showAllItems, showActiveItems, showDoneItems } = this.props;

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info" onClick={showAllItems}>
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={showActiveItems}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={showDoneItems}
        >
          Done
        </button>
      </div>
    );
  }
}
