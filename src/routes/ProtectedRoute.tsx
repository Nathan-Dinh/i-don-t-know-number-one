// src/ProtectedRoute.js
import type { ReactElement } from 'react';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = (): ReactElement => {
  const { isSessionActive } = useContext(AuthContext);

  if (isSessionActive === false) {
    return <Navigate to="/login" replace />;
  } else if (!isSessionActive) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
