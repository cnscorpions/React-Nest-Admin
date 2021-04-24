// eslint-disable-next-line
import React from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./Loading";

const Home = Loadable({
  loader: () => import("pages/Home/Home"),
  loading: Loading,
  delay: 300
});

const Charts = Loadable({
  loader: () => import("pages/Charts/Charts"),
  loading: Loading,
  delay: 300
});

const List = Loadable({
  loader: () => import("pages/List/List"),
  loading: Loading,
  delay: 300
});

const NotFound = Loadable({
  loader: () => import("pages/NotFound/NotFound"),
  loading: Loading,
  delay: 300
});

const NotAllow = Loadable({
  loader: () => import("pages/NotAllow/NotAllow"),
  loading: Loading,
  delay: 300
});

const Add = Loadable({
  loader: () => import("pages/Add/Add"),
  loading: Loading,
  delay: 300
});

const UserManagement = Loadable({
  loader: () => import("pages/User-Management/UserManagement"),
  loading: Loading,
  delay: 300
});

const RichTextEditor = Loadable({
  loader: () => import("pages/RichTextEditor/RichTextEditor"),
  loading: Loading,
  delay: 300
});

const MarkdownEditor = Loadable({
  loader: () => import("pages/MarkDownEditor/MarkDownEditor"),
  loading: Loading,
  delay: 300
});

const ExcelPage = Loadable({
  loader: () => import("pages/Excel/Excel"),
  loading: Loading,
  delay: 300
});

export const Routes = [
  {
    path: "/",
    component: Home,
    isAuthenticated: true, // authed
    roles: ["admin", "user"] // root, user两种角色
  },
  {
    path: "/file/list",
    component: List,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/file/add",
    component: Add,
    isAuthenticated: true,
    roles: ["admin"]
  },
  {
    path: "/charts/:type",
    component: Charts,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/not-found",
    component: NotFound,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/not-allow",
    component: NotAllow,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/user-management",
    component: UserManagement,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/rich-text-editor",
    component: RichTextEditor,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/md-editor",
    component: MarkdownEditor,
    isAuthenticated: true,
    roles: ["admin", "user"]
  },
  {
    path: "/excel/:type",
    component: ExcelPage,
    isAuthenticated: true,
    roles: ["admin"]
  }
];
