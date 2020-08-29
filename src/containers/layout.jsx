import React, { Component } from "react";
import Navbar from "../common/Navbar";
import { Switch, Route } from "react-router";
import FilterableCarRentals from "../components/feed/FilterableCarRentals";
import Dashboard from "../components/dashboard/Dashboard";

class Layout extends Component {
  state = {
    searchText: "",
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          onSearchChange={e => this.setState({ searchText: e.target.value })}
        />
        <main className="">
          <Switch>
            <Route path="/" exact component={FilterableCarRentals} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
