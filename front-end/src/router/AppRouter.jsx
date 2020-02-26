import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import Add from "../pages/Add";

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/home">
            <Home />
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
