import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { isAuth, role } = { ...rest };

  return role.indexOf("root") > -1 ? (
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
  ) : (
    <Route
      {...rest}
      render={({ location }) => (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )}
    />
  );
}

export default PrivateRoute;
