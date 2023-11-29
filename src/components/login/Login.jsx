import React from "react";
import styles from "./style.module.css";
import { useAuth } from "../../contexts/auth/AuthContextProvider";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { login, user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    login(data.get("email"), data.get("password"));
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
