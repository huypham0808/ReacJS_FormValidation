import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListSV = () =>{
    const {listSV, getDeleteSinhVien} = this.props;
    return listSV.map((sinhVien)=>{
      return <UserItem 
      key={sinhVien.id} 
      sinhVien={sinhVien}
      getDeleteSinhVien={getDeleteSinhVien}/>
    })
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Thiết lập</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListSV()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
