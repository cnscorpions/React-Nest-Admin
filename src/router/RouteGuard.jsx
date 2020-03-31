import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { checkPermission } from "./checkPermission";

function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  let { isAuth, definedRoles } = { ...rest };

  // 权限不足跳转（已登录）
  checkPermission(isAuth, definedRoles, location.pathname);

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

export default PrivateRoute;
