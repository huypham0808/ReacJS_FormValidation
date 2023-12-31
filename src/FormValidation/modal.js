import React, { Component } from 'react'

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
   UNSAFE_componentWillReceiveProps(nextProps) {
      //Cập nhật lại state
      if (nextProps && nextProps.sinhVienEdit) {
         this.setState({
            id: nextProps.sinhVienEdit.id,
            fullName: nextProps.sinhVienEdit.fullName,
            userName: nextProps.sinhVienEdit.userName,
            email: nextProps.sinhVienEdit.email,
            phoneNumber: nextProps.sinhVienEdit.phoneNumber,
         })
      } else {
         //reset state
         this.setState({
            id: "",
            fullName: "",
            userName: "",
            email: "",
            phoneNumber: "",
         })
      }
   };
   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <div className="rowTop d-flex justify-content-between align-items-center">
                  <div className="form-group w-50 mr-5">
                     <h5>Mã SV</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="id" value={this.state.id} />
                  </div>
                  <div className="form-group w-50">
                     <h5>Họ tên</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="fullName" value={this.state.fullName} />
                  </div>
               </div>
               <div className="rowTop d-flex justify-content-between align-items-center">
                  <div className="form-group w-50 mr-5">
                     <h5>Số điện thoại</h5>
                     <input type="number" className="form-control mb-3" onChange={this.handleOnChange}
                        name="phoneNumber" value={this.state.phoneNumber} />
                  </div>
                  <div className="form-group w-50">
                     <h5>Email</h5>
                     <input type="text" className="form-control mb-3" onChange={this.handleOnChange}
                        name="email" value={this.state.email} />
                  </div>
               </div>
               <div className="d-flex align-items-center">
                  <button className="btn btn-success mb-3 " type="submit">Thêm / Cập nhật Sinh viên</button>         
               </div>
            </form>
         </div>
      )
   }
};
