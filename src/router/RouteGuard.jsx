import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { getRoles } from "../utils/storage";

function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  let { isAuth, definedRoles } = { ...rest };

  // 权限不足跳转（已登录）
  if (isAuth && getAuthorizedState(definedRoles, location.pathname)) {
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

const getAuthorizedState = (definedRoles, pathname) => {
  const isNotAuthedPath = ["/login", "/not-found", "/not-allow"].find(
    path => path === pathname
  );

  let roles = getRoles() || [];

  // 条件为认证路径下，前端获取的roles数组非空，并且包含在路由定义的数组中
  return (
    !isNotAuthedPath &&
    (!roles || !roles.every(role => !!definedRoles.find(item => item === role)))
  );
};

export default PrivateRoute;
