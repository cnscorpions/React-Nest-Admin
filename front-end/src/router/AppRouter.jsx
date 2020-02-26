import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import Add from "../pages/Add";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
