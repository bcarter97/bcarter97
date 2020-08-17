import React from 'react';
import { useAuthContext } from './Auth';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { user } = useAuthContext();
  return user ? <Route {...props} /> : <Redirect to={{ pathname: '/login' }} />;
};

const UnprotectedRoute = (props) => {
  const { user } = useAuthContext();
  return user ? <Redirect to={{ pathname: '/' }} /> : <Route {...props} />;
};

export { ProtectedRoute, UnprotectedRoute };
