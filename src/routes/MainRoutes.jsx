import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import { useAuth } from "../contexts/auth/AuthContextProvider";
const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
