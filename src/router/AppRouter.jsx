import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Routes } from "./router.config";
import PrivateRoute from "./RouteGuard";

import {
  BarChartOutlined,
  BugOutlined,
  DashboardOutlined,
  EditOutlined,
  ExportOutlined,
  FileExcelOutlined,
  FileMarkdownOutlined,
  FileOutlined,
  GithubOutlined,
  HomeOutlined,
  Html5Outlined,
  InboxOutlined,
  LineChartOutlined,
  OrderedListOutlined,
  PieChartOutlined,
  StopOutlined,
  UploadOutlined,
  UserOutlined
} from "@ant-design/icons";

import { Menu } from "antd";
import AppLayout from "components/layout/AppLayout";

import Loadable from "react-loadable";
import Loading from "./Loading";

const Login = Loadable({
  loader: () => import("pages/Login/Login"),
  loading: Loading,
  delay: 300
});

const Signup = Loadable({
  loader: () => import("pages/Signup/Signup"),
  loading: Loading,
  delay: 300
});

const ResetPwd = Loadable({
  loader: () => import("pages/ResetPwd/ResetPwd"),
  loading: Loading,
  delay: 300
});

const NotFound = Loadable({
  loader: () => import("pages/NotFound/NotFound"),
  loading: Loading,
  delay: 300
});

const { SubMenu } = Menu;

const sidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to={{ pathname: "/" }}>
          <HomeOutlined />
          <span>首页</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to={{ pathname: "/user-management" }}>
          <UserOutlined />
          <span>用户管理</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <FileOutlined />
            <span>文件管理</span>
          </span>
        }
      >
        <Menu.Item key="sub1-1">
          <Link to={{ pathname: "/file/list" }}>
            <OrderedListOutlined />
            <span>文件列表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="sub1-2">
          <Link to={{ pathname: "/file/add" }}>
            <UploadOutlined />
            <span>文件上传</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <DashboardOutlined />
            <span>可视化图表</span>
          </span>
        }
      >
        <Menu.Item key="sub2-1">
          <Link to={{ pathname: "/charts/line-chart" }}>
            <LineChartOutlined />
            <span>折线图</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="sub2-2">
          <Link to={{ pathname: "/charts/bar-chart" }}>
            <BarChartOutlined />
            <span>柱状图</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="sub2-3">
          <Link to={{ pathname: "/charts/pie-chart" }}>
            <PieChartOutlined />
            <span>饼状图</span>
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub5"
        title={
          <span>
            <FileExcelOutlined />
            <span>Excel表格</span>
          </span>
        }
      >
        <Menu.Item key="sub5-1">
          <Link to={{ pathname: "/excel/export-csv" }}>
            <ExportOutlined />
            <span>Export csv</span>
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub4"
        title={
          <span>
            <EditOutlined />
            <span>文本编辑器</span>
          </span>
        }
      >
        <Menu.Item key="sub4-1">
          <Link to={{ pathname: "/rich-text-editor" }}>
            <Html5Outlined />
            <span>富文本编辑器</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="sub4-2">
          <Link to={{ pathname: "/md-editor" }}>
            <FileMarkdownOutlined />
            <span>Markdown编辑器</span>
          </Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub3"
        title={
          <span>
            <BugOutlined />
            <span>错误页面</span>
          </span>
        }
      >
        <Menu.Item key="sub3-1">
          <Link to={{ pathname: "/not-found" }}>
            <InboxOutlined />
            <span>404</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="sub3-2">
          <Link to={{ pathname: "/not-allow" }}>
            <StopOutlined />
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
          <GithubOutlined />
          <span>Github</span>
        </a>
      </Menu.Item>
    </Menu>
  );
};

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
          <PrivateRoute
            key={index}
            exact
            path={route.path}
            isAuth={isAuth}
            definedRoles={route.roles}
          >
            <AppLayout
              content={<route.component />}
              sidebar={sidebar(route.path)}
            />
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
