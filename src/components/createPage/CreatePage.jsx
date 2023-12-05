import React, { useContext } from "react";
import styles from "./style.module.css";
import { Country } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { postContext } from "../../contexts/CreatePostContext";
import { getAuth } from "firebase/auth";
const CreatePage = () => {
  const navigate = useNavigate();
  const { createPost } = useContext(postContext);

  const handleSubmit = (e) => {
    const auth = getAuth();
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = {
      image: data.get("image"),
      description: data.get("description"),
      location: data.get("region"),
      show_comments: data.get("showComments") ? true : false,
      likes: [],
      comments: [],
      user: auth.currentUser.uid,
    };
    createPost(obj);
    navigate("/");
  };
  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} for="fname">
          Картинка
        </label>
        <input type="text" id="fname" name="image" placeholder="Image url..." />
        <label className={styles.label} for="fname">
          Короткое описание
        </label>
        <input
          type="text"
          id="name"
          name="description"
          placeholder="Caption..."
        />
        <label className={styles.label} for="region">
          Локация
        </label>

        <select className={styles.select} id="region" name="region">
          {Country.getAllCountries().map((item) => (
            <option key={item.isoCode}> {item.name} </option>
          ))}
        </select>
        <label className={styles.label_ch}>Комментарии</label>
        <input
          type="checkbox"
          className={styles.checkbox}
          name="showComments"
        />
        <button type="submit" value="Submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
