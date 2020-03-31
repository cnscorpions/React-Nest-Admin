import React from "react";
import { Redirect } from "react-router-dom";
import { getRoles } from "utils/storage";

export const checkPermission = (isAuth, definedRoles, pathname) => {
  if (isAuth && getAuthorizedState(definedRoles, pathname)) {
    return <Redirect to={{ pathname: "/not-allow" }} />;
  }
};

const getAuthorizedState = (definedRoles, pathname) => {
  // 不需要认证路径
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
