import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtetedRouter = ({ canActive, redirectPath = "/" }) => {
  if (!canActive) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
