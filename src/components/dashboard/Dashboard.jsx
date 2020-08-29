import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.scss";
import { Switch, Route } from "react-router";
import AvailableCars from "./AvailableCars";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex dashboard">
        <div className="col-2 px-0 flex-grow-1 bg-theme">
          <Sidebar />
        </div>
        <div className="col-10">
          <Switch>
            <Route
              path="/dashboard"
              exact
              render={() => (
                <div className="h1 p-5 bg-theme rounded mx-auto mt-5 h-50 d-flex align-items-center justify-content-center">
                  Welcome to Dashboard
                  <i class="fas fa-cog fa-lg animate ml-3"></i>
                </div>
              )}
            />
            <Route path="/dashboard/cars" component={AvailableCars} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
