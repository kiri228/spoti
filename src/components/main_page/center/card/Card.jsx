import React from "react";
import styles from "./style.module.css";
import { MdFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";


const Card = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.header}>
        <div className={styles.userlogo}></div>
        <div className={styles.userDate}>
          <div className={styles.userName}> Nikname</div>
          <div className={styles.userPosition}>Kyrgyzystan,Bishkek</div>
        </div>
          <div className={styles.burger}>. . .</div>
        </div>
      <div className={styles.content}></div>
      <div className={styles.communication}>
          <div className={styles.like}> <MdFavorite /> </div>
          <div className={styles.coment}> <FaRegComment /></div>
          <div className={styles.sending}><LuSend /></div>
        <div className={styles.save}><BsBookmark />
       </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
