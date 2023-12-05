import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import Left_part from "../../main_page/left_part/Left_part";
import MenuItem from "@mui/material/MenuItem";
import { getAuth } from "firebase/auth";
import Select from "@mui/material/Select";
import { jsonUserContext } from "../../../contexts/auth/JsonServerUserContext";
const EditProfile = () => {
  const { getOneUser, oneUser, updateUserProfile } =
    useContext(jsonUserContext);
  const [switchA, setSwitchA] = useState("edit");
  const auth = getAuth();
  useEffect(() => {
    getOneUser(auth.currentUser.uid);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = {
      image: data.get("image"),

      description: data.get("description"),
      location: data.get("region"),
      show_comments: data.get("showComments") ? true : false,
      user: auth.currentUser.uid,
    };
  };
  return (
    <div className={styles.main}>
      <Left_part />
      <div className={styles.right}>
        <div className={styles.userSection}>
          <img className={styles.avatar} src={oneUser.photoUrl} />
          <span>{oneUser.username}</span>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} for="fname">
            Изменить аватар
          </label>
          <input
            type="text"
            id="fname"
            name="image"
            placeholder="Image url..."
          />
          <label className={styles.label} for="fname">
            Username
          </label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="Username..."
          />
          <label className={styles.label} for="fname">
            BIO(1-150)
          </label>
          <input
            type="text"
            id="name"
            name="description"
            placeholder="BIO..."
          />
          <label className={styles.label} for="fname">
            Email (требуются доп действия)
          </label>
          <input
            type="text"
            id="name"
            name="email"
            placeholder="new@gmail.com..."
          />
          <label className={styles.label} for="fname">
            Номер телефона
          </label>
          <input
            type="text"
            id="name"
            name="phoneNumber"
            placeholder="Number..."
          />
          <label className={styles.label} for="fname">
            Gender
          </label>
          <select className={styles.select} id="region" name="gender">
            <option> prefer not to say </option>
            <option> male </option>
            <option> female </option>
            <option> another </option>
          </select>
          <button type="submit" value="Submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
