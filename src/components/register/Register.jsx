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
    <div className={styles.registerForm}>
      <h1 className={styles.instagramTitle}>Register</h1>
      {/* <p className={styles.registrationText}>
        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
      </p> */}
      <button
        className={styles.facebookButton}
        onClick={() => (window.location.href = "https://www.facebook.com/")}
      >
        Войти через Facebook
      </button>

      <div className={styles.orDivider}>
        <span className={styles.dividerLine}></span>
        <span className={styles.orText}>ИЛИ</span>
        <span className={styles.dividerLine}></span>
      </div>

      <form className={styles.inputContainer}>
        <input type="email" placeholder="Электронный адрес" />
        <input type="text" placeholder="Имя и фамилия" />
        <input type="text" placeholder="Имя пользователя" />
        <input type="password" placeholder="Пароль" />
        <button className={styles.registerButton}>Регистрация</button>
      </form>
      <p className={styles.additionalText}>
        Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную
        информацию в Instagram.{" "}
        <span
          onClick={() =>
            (window.location.href = "https://www.facebook.com/privacy/policy")
          }
        >
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
  )
}

export default Register
