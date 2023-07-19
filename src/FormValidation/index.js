import React, { Component } from "react";
import Users from "./Users";
import data from './DataSV.json'
import Modal from "./modal";
class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         listSV: data,
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
   handleSubmitSinhVien = (sinhVien)=>{
      //Add Sinh Vien
      let listSinhVienClone = [...this.state.listSV, sinhVien];
      this.setState({
         listSV: listSinhVienClone,
      })
   }
   render() {
      const { listSV } = this.state;
      return (
         <div className="container">
            <h5 className="display-5 text-left p-3 my-3 bg-dark text-light">THÔNG TIN SINH VIÊN</h5>
            <Modal getSinhVienSubmit={this.handleSubmitSinhVien}/>
            <Users
               getDeleteSinhVien={this.handleDeleteSinhVien}
               listSV={listSV} />
         </div>
      );
   }
}
export default Home;
