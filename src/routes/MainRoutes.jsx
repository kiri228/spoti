import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "../components/main_page/Mainpage";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
