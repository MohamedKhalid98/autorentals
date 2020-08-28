import React, { Component } from "react";
import Navbar from "../common/navbar";
import { Switch, Route } from "react-router";
import FilterableCarRentals from "../components/FilterableCarRentals";

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
        <main className="container">
          <Switch>
            <Route path="/" exact component={FilterableCarRentals} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
