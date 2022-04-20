import React, { Component } from "react";
import dateFormat from "dateformat";

export default class StaffListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectstaffs: null,
      columdefault: "col-xs-12 col-sm-6 col-md-4 p-2"
    };
  }

  ListDetail(staff) {
    this.setState({ selectstaffs: staff},
      
      );
  }

  renderdetail(staff) {
    if (staff != null)
      return (
        <div className="p-3 border bg-light text-left ">
          <strong>Họ và tên:{staff.name} </strong>
          <br />
          Năm sinh: <i>{dateFormat(staff.doB, "dd/mm/yyyy")}</i>
          <br />
          Phòng ban: <i>{staff.department.name}</i>
          <br />
          Ngày vào cty:<i>{dateFormat(staff.startDate, "dd/mm/yyyy")}</i>
          <br />
          Chức vụ: <i>{staff.chucdanh}</i>
          <br />
          Số ngày nghỉ còn lại:<i> {staff.annualLeave}</i>
          <br />
          Số ngày đã làm thêm:<i>{staff.overTime}</i>
          <br />
        </div>
      );
    else return <div></div>;
  }

  render() {
    const newarry = this.props.staffs.map((staff) => {
      return (
        <div
          key={staff.id}
          onClick={() => this.ListDetail(staff)}
          className={(this.state.columdefault)}
        >
          <div id={`id${staff.id}`} className="p-3 border bg-light">
            {staff.name}
          </div>
        </div>
      );
    });
    return (
      
      <div className="container">
        <div className="btn-group">
          <button onClick={()=>this.setState.columdefault="col-6"} className="btn btn-outline-primary">2 Cot</button>
          <button className="btn btn-outline-primary">3 Cot</button>
          <button className="btn btn-outline-primary">4 Cot</button>
          <button className="btn btn-outline-primary">6 Cot</button>
        </div>
        
        <div className="row g-2">{newarry}</div>
        <h6>Bấm vào tên nhân viên để xem thông tin</h6>
        <div className="row g-2">
          <div className="col-4">
            {this.renderdetail(this.state.selectstaffs)}
          </div>
        </div>
      </div>
    );
  }
}
