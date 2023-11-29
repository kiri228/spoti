import React from "react";
import styles from "./style.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const Navbar = () => {
  return (
    <div className={styles.main}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg" />
        </li>
        <li className={styles.li}>
          <img src="https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80=" />
        </li>
        <li className={styles.li}>
          <img src="https://images-s.kinorium.com/persona/180/329.jpg?1547644071" />
        </li>
        <li className={styles.li}>
          <img src="" />
        </li>
        <li className={styles.li}>
          <img src="" />
        </li>
        <li className={styles.li}>
          <img src="" />
        </li>
        <li className={styles.li}>
          <img src="" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
