import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
}
