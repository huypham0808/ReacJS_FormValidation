import React, { Component } from "react";
import Users from "./Users";
import data from './DataSV.json'
import Modal from "./modal";
import Search from "./Search";
class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listSV: data,
         sinhVienEdit: null,
         keyword: "",
      }
   }
   //Tim vi tri de xoa
   _findIndex = (id) => this.state.listSV.findIndex((sinhVien) => sinhVien.id === id);

   //Delete Sinh Vien
   handleDeleteSinhVien = (id) => {
      //Clone mảng list Sinh viên từ State => tạo mảng mới
      let listSVClone = [...this.state.listSV];
      //Tìm vị trí id
      const index = this._findIndex(id);
      if (index !== -1) {
         //Xoá Sinh viên dựa theo index
         listSVClone.splice(index, 1);
         //Cập nhật lại state
         this.setState({
            listSV: listSVClone,
         })
      }
   };
   //Submit Sinh Vien
   handleSubmitSinhVien = (sinhVien) => {
      if (sinhVien.id) {
         const index = this._findIndex(sinhVien.id);
         if (index !== -1) {
            let listSinhVienClone = [...this.state.listSV];
            listSinhVienClone[index] = sinhVien;
            this.setState({
               listSV: listSinhVienClone,
            })
         }
      } else {
         //Add Sinh Vien
         let listSinhVienClone = [...this.state.listSV, sinhVien];
         this.setState({
            listSV: listSinhVienClone,
         })
      }
   };
   //Edit Sinh Vien
   handleEditSinhVien = (sinhVien) => {
      this.setState({
         sinhVienEdit: sinhVien,
      })
   };
   handleGetKeyWord = (keyword) => {
      this.setState({
         keyword,
      })
   }
   render() {
      let { listSV, sinhVienEdit, keyword } = this.state;
      listSV = listSV.filter((sinhVien) => sinhVien.fullName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
      return (
         <div className="container">
            <h5 className="display-5 text-left p-3 my-3 bg-dark text-light">THÔNG TIN SINH VIÊN</h5>
            <Modal getSinhVienSubmit={this.handleSubmitSinhVien}
               sinhVienEdit={sinhVienEdit} />
            <Search getKeyWord={this.handleGetKeyWord} />
            <Users
               getDeleteSinhVien={this.handleDeleteSinhVien}
               listSV={listSV}
               getEditSinhVien={this.handleEditSinhVien} />
         </div>
      );
   }
}
export default Home;
