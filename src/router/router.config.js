// eslint-disable-next-line
import { Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Charts from "../pages/Charts/Charts";
import List from "../pages/List/List";
import NotFound from "../pages/NotFound/NotFound";
import NotAllow from "../pages/NotAllow/NotAllow";
import Add from "../pages/Add/Add";
import UserManagement from "../pages/User-Management/UserManagement";
import RichTextEditor from "../pages/RichTextEditor/RichTextEditor";
import MarkdownEditor from "../pages/MarkDownEditor/MarkDownEditor";
import ExcelPage from "../pages/Excel/Excel";

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
