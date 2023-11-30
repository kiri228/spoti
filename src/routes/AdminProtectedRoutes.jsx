import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextProvider";
import { notify } from "../components/Toastify";

const AdminProtectedRoutes = ({ children }) => {
  const { isAdmin } = useAuth();
  if (!isAdmin()) {
    notify("You are not admin!", "error");
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoutes;
