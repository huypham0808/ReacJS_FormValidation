import React, { Component } from 'react'
import Search from './Search'

export default class Modal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         //Lưu value khi user nhập vào input
         id: "",
         fullName: "",
         userName: "",
         email: "",
         phoneNumber: "",
      };
   };
   handleOnChange = (event) => {
      const { name, value } = event.target;
      //Cập nhật lại trong form
      this.setState({
            [name]: value,
      });
   };
   handleSubmit = (event) => {
      event.preventDefault(); //Ngăn load lại trang web khi click "submit"
      //truyền state ra index
      this.props.getSinhVienSubmit(this.state);
   };
   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <div className="rowTop d-flex justify-content-between align-items-center">
                  <div className="form-group w-50 mr-5">
                     <h5>Mã SV</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="id" />
                  </div>
                  <div className="form-group w-50">
                     <h5>Họ tên</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="fullName" />
                  </div>
               </div>
               <div className="rowTop d-flex justify-content-between align-items-center">
                  <div className="form-group w-50 mr-5">
                     <h5>Số điện thoại</h5>
                     <input type="number" className="form-control mb-3" onChange={this.handleOnChange}
                        name="phoneNumber" />
                  </div>
                  <div className="form-group w-50">
                     <h5>Email</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="email" />
                  </div>
               </div>
               <div className="d-flex justify-content-start align-items-center">
                  <button className="btn btn-success mb-3 btnThemSV" type="submit">Thêm sinh viên</button>
                  <Search />
               </div>
            </form>
         </div>
      )
   }
};
