import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import Left_part from "./left_part/Left_part";
import Center from "./center/Center";
import RightPart from "./right_part/RightPart";
const Mainpage = () => {
  return (
    <div className={styles.main}>
      <Left_part />
      <Center />
      <RightPart />
    </div>
  );
};

export default Mainpage;
