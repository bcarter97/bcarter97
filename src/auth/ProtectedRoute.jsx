import React from 'react';
import { useAuthContext } from './Auth';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
  const Component = component;
  const { user } = useAuthContext();
  return user ? <Component /> : <Redirect to={{ pathname: '/login' }} />;
};

const UnprotectedRoute = ({ component }) => {
  const Component = component;
  const { user } = useAuthContext();
  return user ? <Redirect to={{ pathname: '/' }} /> : <Component />;
};

export { ProtectedRoute, UnprotectedRoute };
