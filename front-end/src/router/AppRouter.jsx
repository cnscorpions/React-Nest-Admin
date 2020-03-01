import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "../components/common/AppLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import Add from "../pages/Add";

// define route configuration except login, 404
const Routes = [
  {
    path: "/",
    component: Home,
    isExact: true,
    isAuthenticated: true, // authed
    role: ["root", "user"] // root or user
  },
  {
    path: "/list",
    component: List,
    isAuthenticated: true,
    role: ["root", "user"]
  },
  {
    path: "/add",
    component: Add,
    isAuthenticated: true,
    role: ["root"]
  }
];

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        {Routes.map((route, index) => (
          <Route key={index} exact={route.isExact} path={route.path}>
            <AppLayout>
              <route.component />
            </AppLayout>
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
