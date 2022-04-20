import React,{Component} from "react";
import { Navbar } from "reactstrap";
import StaffListComponent from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <div className="row" style={{ color: "white" }}>
              Ứng dụng quản lý nhân sự V1.0
            </div>
          </div>
        </Navbar>
        <StaffListComponent staffs={this.state.staffs} />
       
      </div>
    );
  }
}
export default App;
