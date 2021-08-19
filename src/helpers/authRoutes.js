import React from "react";
import { Route, Redirect } from "react-router-dom";

export const UserLoggedIn = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) return children;
        if (user)
          return (
            <Redirect
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        return null;
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children;
        if (!user)
          return <Redirect to={{ pathname: "/", state: { from: location } }} />;

        return null;
      }}
    />
  );
};
