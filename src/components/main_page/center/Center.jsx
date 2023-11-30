import React from "react";
import styles from "./style.module.css";
import Navbar from "./navbar/Navbar";
import Card from "./card/Card";

const Center = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Card /> 
    </div>
  );
};

export default Center;
