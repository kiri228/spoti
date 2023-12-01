import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/AuthContextProvider";
import { notify } from "../components/Toastify";

const AdminProtectedRoutes = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    alert("You are not logined!", "error");
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminProtectedRoutes;
