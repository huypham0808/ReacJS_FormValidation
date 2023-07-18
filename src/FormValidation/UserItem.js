import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const {sinhVien, getDeleteSinhVien} = this.props;
    return (
      <tr>
        <td>{sinhVien.id}</td>
        <td>{sinhVien.fullName}</td>
        <td>{sinhVien.phoneNumber}</td>
        <td>{sinhVien.email}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{
            getDeleteSinhVien(sinhVien.id)
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
