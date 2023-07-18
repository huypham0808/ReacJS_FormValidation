import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import data from './DataSV.json'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      listSV: data,
    }
  }
  //Tim vi tri de xoa
  _findIndex = (id) => this.state.listSV.findIndex((sinhVien)=> sinhVien.id=== id);

  //Delete Sinh Vien
  handleDeleteSinhVien = (id) => {
    //Clone mảng list Sinh viên từ State => tạo mảng mới
    let listSVClone = [...this.state.listSV];
    //Tìm vị trí id
    const index = this._findIndex(id);
    if(index !== -1) {
    //Xoá Sinh viên dựa theo index
      listSVClone.splice(index,1);
    //Cập nhật lại state
      this.setState({
        listSV: listSVClone,
      })
    }
  };
  render() {
    const {listSV} = this.state;
    return (
      <div className="container">
        <h5 className="display-5 text-left p-3 my-3 bg-dark text-light">THÔNG TIN SINH VIÊN</h5>
        <div className="formInput">
          <div className="rowTop d-flex justify-content-between align-items-center">
            <div className="rowInputItem w-50 mr-5">
              <h5>Mã SV</h5>
              <input type="text" className="form-control mb-3" />
            </div>
            <div className="rowTopItem w-50">
              <h5>Họ tên</h5>
              <input type="text" className="form-control mb-3" />
            </div>
          </div>
          <div className="rowTop d-flex justify-content-between align-items-center">
            <div className="rowInputItem w-50 mr-5">
              <h5>Số điện thoại</h5>
              <input type="text" className="form-control mb-3" />
            </div>
            <div className="rowTopItem w-50">
              <h5>Email</h5>
              <input type="text" className="form-control mb-3" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <button className="btn btn-success mb-3 btnThemSV">Thêm sinh viên</button>
          <Search />
        </div>
        <Users 
          getDeleteSinhVien={this.handleDeleteSinhVien} 
          listSV={listSV}/>
      </div>
    );
  }
}

export default Home;
