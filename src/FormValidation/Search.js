import React, { Component } from "react";

class Search extends Component {
  handleOnChange=(e)=>{
    this.props.getKeyWord(e.target.value );
  }
  render() {
    return (
      <div className="d-flex align-items-center txtSearch w-100">
        <h6 className="mr-3">Tìm kiếm</h6>
        <input type="text" className="form-control searchUser" 
        onChange={this.handleOnChange}/>
      </div>
    );
  }
}
export default Search;
