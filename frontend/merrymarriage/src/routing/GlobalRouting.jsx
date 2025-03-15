import { createBrowserRouter, Navigate } from "react-router-dom";

// Private Route Handler
import Home from "../pages/Home/Home";

import PageNotFound from "./../pages/PageNotFound/PageNotFound";
import AdminDashboard from "./../admin/AdminDashboard";
import VendorDashboard from "./../vendor/VendorDashboard";
import PrivateRoute from "./../auth/PrivateRoute";
import UserDashboard from "../user/UserDashBoard/UserDashboard";
import LandingPage from "../pages/LandinPage/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      // Admin Routes (Protected)
      {
        path: "/home/admin",
        element: <PrivateRoute allowedRoles={["admin"]} />,
        children: [{ index: true, element: <AdminDashboard /> }],
      },

      // User Routes (Protected)
      {
        path: "/home/user",
        element: <PrivateRoute allowedRoles={["user"]} />,
        children: [{ index: true, element: <UserDashboard /> }],
      },

      // Vendor Routes (Protected)
      {
        path: "/home/vendor",
        element: <PrivateRoute allowedRoles={["vendor"]} />,
        children: [{ index: true, element: <VendorDashboard /> }],
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default router;
