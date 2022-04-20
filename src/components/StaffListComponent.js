import React, { Component } from "react";
import dateFormat from "dateformat";

export default class StaffListComponent extends Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state = {
      selectstaffs: null,
      classdefault: "col-xs-12 col-sm-6 col-md-4 p-3"
    };
  }

  ListDetail(staff) {
    this.setState({ selectstaffs: staff });
  }

  ColoumSelect(selectcoloum) {
    this.setState({
      classdefault: selectcoloum
    })
  }

  renderdetail(staff) {
    if (staff != null)
      return (
        <div className="p-3 border bg-light text-left ">
          <img src={staff.image} alt="anhthe"></img><br />
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
    console.log("render")
    const newarry = this.props.staffs.map((staff) => {
      return (
        <div
          key={staff.id}
          onClick={() => this.ListDetail(staff)}
          className={this.state.classdefault}
        >
          <div id={`id${staff.id}`} className="p-3 border bg-light">
            {staff.name}
          </div>
        </div>
      );
    });
    return (

      <div className="container">
        <div className="btn-group row p-2">
          <button onClick={() => this.ColoumSelect("col-12 p-2")} className="btn btn-outline-primary">1 Cot</button>
          <button onClick={() => this.ColoumSelect("col-4 p-2")} className="btn btn-outline-primary">3 Cot</button>
          <button onClick={() => this.ColoumSelect("col-3 p-2")} className="btn btn-outline-primary">4 Cot</button>
          <button onClick={() => this.ColoumSelect("col-2 p-2")} className="btn btn-outline-primary"> 6 Cot</button>
          <button onClick={() => this.ColoumSelect("col-1 p-2")} className="btn btn-outline-primary"> 12 Cot</button>
        </div>

        <div className="row p-2">{newarry}</div>
        <h6>Bấm vào tên nhân viên để xem thông tin</h6>
        <div className="row g-2">
          <div className="col-xs-12 col-sm-6 col-md-6">
            {this.renderdetail(this.state.selectstaffs)}
          </div>
        </div>
      </div>
    );
  }
}
