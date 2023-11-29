import React from "react";
import styles from "./style.module.css";
import logo from "./images/logo.jpeg";
import home_logo from "./images/home_logo.png";
import search_logo from "./images/search_logo.png";
import notifications_logo from "./images/notification_logo.png";
import create_logo from "./images/create_logo.png";
import more_logo from "./images/more_logo.png";
import default_logo from "./images/default_picture.jpeg";

const Left_part = () => {
  return (
    <div className={styles.main}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img src={home_logo} alt="" />
          <span>Home</span>
        </li>
        <li className={styles.li}>
          <img src={search_logo} alt="search_logo" />
          <span>Seacrh</span>
        </li>
        <li className={styles.li}>
          <img src={notifications_logo} alt="notifications_logo" />
          <span>Notifications</span>
        </li>
        <li className={styles.li}>
          <img src={create_logo} alt="create_logo" style={{ width: "10%" }} />
          <span>Create</span>
        </li>
        <li className={styles.li}>
          <img src={default_logo} alt="profie_logo" />
          <span>Profile</span>
        </li>
        <li className={styles.li}>
          <img src={more_logo} alt="more_logo" />
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};

export default Left_part;
