import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "../components/main_page/Mainpage";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import { useAuth } from "../contexts/auth/AuthContextProvider";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import CreatePage from "../components/createPage/CreatePage";
import Profile from "../components/profile/Profile";
const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Mainpage /> : <Login />} />
      <Route path="/login" element={user ? <Mainpage /> : <Login />} />
      <Route path="/register" element={user ? <Mainpage /> : <Register />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;
