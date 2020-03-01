import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import Add from "../pages/Add";

// define route configuration
const Routes = [
  {
    path: "/",
    component: Home,
    isExact: true,
    isAuthenticated: true, // authed
    role: ["root", "user"] // root or user
  },
  {
    path: "/login",
    component: Login,
    isExact: false,
    isAuthenticated: false,
    role: []
  },
  {
    path: "/list",
    component: List,
    isExact: false,
    isAuthenticated: true,
    role: ["root", "user"]
  },
  {
    path: "/add",
    component: Add,
    isExact: false,
    isAuthenticated: true,
    role: ["root"]
  },
  {
    path: "*",
    component: NotFound,
    isExact: false,
    isAuthenticated: true,
    role: ["root", "user"]
  }
];

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <Route
            key={index}
            exact={route.isExact}
            path={route.path}
            children={<route.component />}
          />
        ))}
      </Switch>
    </Router>
  );
}
