import React, { Component } from "react";
import Layout from "./containers/Layout";
import { Route, Switch } from "react-router";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
