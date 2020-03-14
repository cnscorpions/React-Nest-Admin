import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./RouteGuard";
import { Menu, Icon } from "antd";
import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import List from "../pages/List/List";
import NotFound from "../pages/NotFound";
import Add from "../pages/Add/Add";

const { SubMenu } = Menu;

const sidebar = (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      <Link to="/">
        <Icon type="dashboard" />
        <span>首页</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="book" />
          <span>图书管理</span>
        </span>
      }
    >
      <Menu.Item key="sub1-1">
        <Link to="/list">
          <Icon type="menu" />
          <span>图书列表</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sub1-2">
        <Link to="/add">
          <Icon type="edit" />
          <span>添加图书</span>
        </Link>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key="2">
      <a
        href="https://github.com/cnscorpions/React-Nest-Admin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon type="github" />
        <span>Githu</span>
      </a>
    </Menu.Item>
  </Menu>
);

// define route configuration except login, 404
const Routes = [
  {
    path: "/",
    component: Home,
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

function AppRouter(props) {
  const { isAuth } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        {Routes.map((route, index) => (
          <PrivateRoute key={index} exact path={route.path} isAuth={isAuth}>
            <AppLayout content={<route.component />} sidebar={sidebar} />
          </PrivateRoute>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, null)(AppRouter);
