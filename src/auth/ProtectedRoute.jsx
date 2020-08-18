import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuthContext } from "./Auth";

const ProtectedRoute = (props) => {
  const { user } = useAuthContext();
  return user ? <Route {...props} /> : <Redirect to={{ pathname: "/login" }} />;
};

const UnprotectedRoute = (props) => {
  const { user } = useAuthContext();
  return user ? <Redirect to={{ pathname: "/" }} /> : <Route {...props} />;
};

export { ProtectedRoute, UnprotectedRoute };
