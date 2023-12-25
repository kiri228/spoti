import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import styles from "./style.module.css";
import "../register/Register";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../contexts/auth/AuthContextProvider";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    login(data.get("email"), data.get("password"));
    console.log(getAuth());
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.instagramHeader}>
          <h2 style={{ fontSize: "1.5rem" }}>Instagram</h2>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer}></div>
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="email"
              name="email"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="password"
              name="password"
            />
            <button type="submit" className={styles.button}>
              Войти
            </button>
          </form>
        </div>
        <div className={styles.orDivider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.orText}>ИЛИ</span>
          <span className={styles.dividerLine}></span>
        </div>
        <div className={styles.facebookLogin}>
          <span className={styles.facebookText}>Войти через Facebook</span>
          <span className={styles.facebookLink}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer">
              Официальный сайт
            </a>
          </span>
        </div>

        <div className={styles.registrationContainer}>
          <div className={styles.registrationLink}>
            <p style={{ display: "inline", marginRight: "10px" }}>
              У вас еще нет аккаунта?
            </p>
            <NavLink to="/register" className={styles.registerLink}>
              Зарегистрироваться
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
