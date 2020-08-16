import React from 'react';
import { useAuthContext } from '../auth/Auth';

const Profile = () => {
  const { user } = useAuthContext();
  return <div>{user.email}</div>;
};

export { Profile };
