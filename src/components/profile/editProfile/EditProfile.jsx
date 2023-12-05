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
  useEffect(() => {
    getOneUser(auth.currentUser.uid);
  }, []);
  const [dict, setDict] = useState({
    image: oneUser.photoUrl,
    description: oneUser.description,
    email: oneUser.email,
    gender: oneUser.gender,
    name: oneUser.name,
    phoneNumber: oneUser.phoneNumber,
    username: oneUser.username,
  });

  const auth = getAuth();

  function handleInput(e) {
    console.log(dict);
    setDict({
      ...dict,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    updateUserProfile(dict);
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
            Изменить аватар ({oneUser.photoUrl.slice(0, 30)} ...)
          </label>
          <input
            type="text"
            value={dict.image}
            id="fname"
            name="image"
            placeholder="url..."
            onChange={handleInput}
          />
          <label className={styles.label} for="fname">
            Username ({oneUser.username})
          </label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="username..."
            onChange={handleInput}
          />
          <label className={styles.label} for="fname">
            Name ({oneUser.name})
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name..."
            onChange={handleInput}
          />
          <label className={styles.label} for="fname">
            BIO(1-150)
          </label>
          <label className={styles.label} for="fname">
            ({oneUser.description})
          </label>
          <input
            type="text"
            id="name"
            onChange={handleInput}
            name="description"
            placeholder="description..."
          />
          <label className={styles.label} for="fname">
            Email ({oneUser.email})
          </label>
          <input
            type="text"
            id="name"
            name="email"
            onChange={handleInput}
            placeholder="new@gmail.com"
          />
          <label className={styles.label} for="fname">
            Номер телефона ({oneUser.phoneNumber})
          </label>
          <input
            type="text"
            id="name"
            onChange={handleInput}
            name="phoneNumber"
            placeholder="4234234324..."
          />
          <label className={styles.label} for="fname">
            Gender
          </label>
          <select
            className={styles.select}
            id="region"
            name="gender"
            onChange={handleInput}>
            <option> prefer not to say </option>
            <option> male </option>
            <option> female </option>
            <option> another </option>
          </select>
          <button type="submit" value="Submit" className={styles.button}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
