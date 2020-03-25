import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./RouteGuard";
import { Menu, Icon } from "antd";
import AppLayout from "../components/layout/AppLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ResetPwd from "../pages/ResetPwd/ResetPwd";
import Charts from "../pages/Charts/Charts";
import List from "../pages/List/List";
import NotFound from "../pages/NotFound/NotFound";
import Add from "../pages/Add/Add";

const { SubMenu } = Menu;

const sidebar = (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    <Menu.Item key="1">
      <Link to="/">
        <Icon type="home" />
        <span>首页</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/">
        <Icon type="user" />
        <span>用户管理</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="file" />
          <span>文件管理</span>
        </span>
      }
    >
      <Menu.Item key="sub1-1">
        <Link to="/file/list">
          <Icon type="ordered-list" />
          <span>文件列表</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sub1-2">
        <Link to="/file/add">
          <Icon type="upload" />
          <span>文件上传</span>
        </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="dashboard" />
          <span>可视化图表</span>
        </span>
      }
    >
      <Menu.Item key="sub2-1">
        <Link to="/charts/line-chart">
          <Icon type="line-chart" />
          <span>折线图</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sub2-2">
        <Link to="/charts/bar-chart">
          <Icon type="bar-chart" />
          <span>柱状图</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sub2-3">
        <Link to="/charts/pie-chart">
          <Icon type="pie-chart" />
          <span>饼状图</span>
        </Link>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key="3">
      <Link to="/">
        <Icon type="file-excel" />
        <span>Excel表格</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link to="/">
        <Icon type="file-excel" />
        <span>文本编辑器</span>
      </Link>
    </Menu.Item>
    <SubMenu
      key="sub3"
      title={
        <span>
          <Icon type="bug" />
          <span>错误页面</span>
        </span>
      }
    >
      <Menu.Item key="sub3-1">
        <Link to="/not-found">
          <Icon type="inbox" />
          <span>404</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sub3-2">
        <Link to="/unauthorized">
          <Icon type="stop" />
          <span>403</span>
        </Link>
      </Menu.Item>
    </SubMenu>

    <Menu.Item key="6">
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
    path: "/file/list",
    component: List,
    isAuthenticated: true,
    role: ["root", "user"]
  },
  {
    path: "/file/add",
    component: Add,
    isAuthenticated: true,
    role: ["root"]
  },
  {
    path: "/charts/:type",
    component: Charts,
    isAuthenticated: true,
    role: ["root", "user"]
  },
  {
    path: "/not-found",
    component: NotFound,
    isAuthenticated: true,
    role: ["root", "user"]
  }
];

function AppRouter(props) {
  const { isAuth } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/reset-pwd">
          <ResetPwd />
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
