import React, { Component } from "react";
import Sidebar from "./Sidebar";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
