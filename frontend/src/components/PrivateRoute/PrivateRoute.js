import React from "react";
import { Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated")
  return (
    <Route {...rest} render={({ location }) => {
      return isAuthenticated === "true"
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
    }}
    />
  )
};

export default PrivateRoute;