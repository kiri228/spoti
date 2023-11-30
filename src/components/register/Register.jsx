import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthContextProvider";
import { Navigate } from "react-router-dom";
const Register = () => {
  const { register, user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    register(
      data.get("email"),
      data.get("password"),
      data.get("displayName"),
      data.get("name_and_surname")
    );
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" name="email" />
        <input
          type="text"
          placeholder="name and surname"
          name="name_and_username"
        />
        <input type="text" placeholder="username" name="displayName" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Register
