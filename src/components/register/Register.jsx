import React from "react";
import styles from "./style.module.css";
import "../login/Login";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthContextProvider";
import { Navigate } from "react-router-dom";
const Register = () => {
  const { register, user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    register(data.get("email"), data.get("password"), data.get("displayName"));
  };
  return (
    <div className={styles.registerForm}>
      <h1 className={styles.instagramTitle}>Register</h1>
      <button
        className={styles.facebookButton}
        onClick={() => (window.location.href = "https://www.facebook.com/")}>
        Войти через Facebook
      </button>

      <div className={styles.orDivider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.orText}>ИЛИ</span>
        <span className={styles.dividerLine}></span>
      </div>

      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" name="email" />
        <input type="text" placeholder="username" name="displayName" />
        <input type="password" placeholder="password" name="password" />
        <button className={styles.registerButton}>Регистрация</button>
      </form>
      <p className={styles.additionalText}>
        Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную
        информацию в Instagram.{" "}
        <span
          onClick={() =>
            (window.location.href = "https://www.facebook.com/privacy/policy")
          }>
          (Регистрируясь, вы принимаете наши Условия, Политику
          конфиденциальности и Политику в отношении файлов cookie.)
        </span>
      </p>

      <div className={styles.OpenContainer}>
        <div className={styles.OpenLink}>
          <p style={{ display: "inline", marginRight: "10px" }}></p>

          <p>Есть аккаунт?</p>

          <NavLink to="/login" className={styles.OpenLinkLink}>
            Вход
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
