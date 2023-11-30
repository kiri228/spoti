import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import Left_part from "./left_part/Left_part";
import Center from "./center/Center";
import Right_part from "./right_part/Right_part"
const Mainpage = () => {
  return (
    <div className={styles.main}>
      <Left_part />
      <Center />
      <Right_part/>
    </div>
  );
};

export default Mainpage;
