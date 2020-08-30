import React, { Component } from "react";
import Navbar from "../common/Navbar";
import { Switch, Route } from "react-router";
import FilterableCarRentals from "../components/feed/FilterableCarRentals";
import Dashboard from "../components/dashboard/Dashboard";
import Register from "../components/auth/register";

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
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />

            <Route path="/" exact component={FilterableCarRentals} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
