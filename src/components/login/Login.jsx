import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import "../register/Register";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    console.log("Вход выполнен:", { username, password });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.instagramHeader}>
          <h2 style={{ fontSize: "1.5rem" }}>Instagram</h2>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsUsernameFocused(true)}
              onBlur={() => setIsUsernameFocused(false)}
              className={`${styles.input} ${
                isUsernameFocused || username ? styles.inputFocused : ""
              }`}
            />
            <label className={styles.label}>Электронный адрес</label>
          </div>
          <form className={styles.inputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              className={`${styles.input} ${
                isPasswordFocused || password ? styles.inputFocused : ""
              }`}



            />
            <label className={styles.label}>Пароль</label>
            <p style={{ height: "20px" }}></p>




            {password && (
              <span
                className={styles.showPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Скрыть" : "Показать"}
              </span>
            )}
            <button onClick={handleLogin} className={styles.button}>
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
              rel="noopener noreferrer"
            >
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
