import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>認証確認中...</p>;
  if (!user) return <Navigate to="/news-admin-login" />;

  return children;
};

export default RequireAuth;