import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getRoles } from "../utils/storage";

function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  const { pathname } = location;
  let { isAuth, definedRoles } = { ...rest };
  let roles = getRoles();

  // 对比role，权限不够跳转
  if (getAuthorizedState(roles, definedRoles, pathname)) {
    return <Redirect to={{ pathname: "/not-allow" }} />;
  }

  // 未认证跳转
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const getAuthorizedState = (roles, definedRoles, pathname) => {
  const isAuthedPath = ["/login", "/not-found", "/not-allow"].find(
    path => path === pathname
  );
  // 条件为非认证路径下，前端获取的roles数组非空，并且包含在路由定义的数组中的
  return (
    !isAuthedPath &&
    (!roles || !roles.every(role => !!definedRoles.find(item => item === role)))
  );
};

export default PrivateRoute;
