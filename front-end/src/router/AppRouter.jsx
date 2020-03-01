import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import Login from "../pages/login/Login";
// import List from "../pages/List";
// import NotFound from "../pages/NotFound";
// import Add from "../pages/Add";

// define route configuration
const Routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    isExact: true,
    isAuthenticated: true, // authed
    role: ["root", "user"] // root or user
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login/Login")),
    isExact: false,
    isAuthenticated: false,
    role: []
  },
  {
    path: "/list",
    component: lazy(() => import("../pages/List")),
    isExact: false,
    isAuthenticated: true,
    role: ["root", "user"]
  },
  {
    path: "/add",
    component: lazy(() => import("../pages/Add")),
    isExact: false,
    isAuthenticated: true,
    role: ["root"]
  },
  {
    path: "*",
    component: lazy(() => import("../pages/NotFound")),
    isExact: false,
    isAuthenticated: true,
    role: ["root", "user"]
  }
];

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {Routes.map((route, index) => (
            <Route
              key={index}
              exact={route.isExact}
              path={route.path}
              component={route.component}
            ></Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}
