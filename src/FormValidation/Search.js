import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="d-flex align-items-center mb-3 ml-5">
        <h5 className="mr-3">Tìm kiếm</h5>
        <input type="text" className="form-control searchUser" />
      </div>
    );
  }
}
export default Search;
