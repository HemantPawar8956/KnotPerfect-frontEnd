import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./../GlobalContext/GlobalContext";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, role, loading } = useContext(AuthContext);
  if (loading) return <p>Loading...</p>; // Show a loading screen while checking auth state

  if (!user) return <Navigate to="/login" />; // Redirect if not logged in
  if (!allowedRoles.includes(jwtDecode(user.role)?.role))
    return <Navigate to="/" />; // Redirect if role is unauthorized

  return <Outlet />;
};

export default PrivateRoute;
