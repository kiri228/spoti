import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { MdFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { getAuth } from "firebase/auth";
import { jsonUserContext } from "../../../../contexts/auth/JsonServerUserContext";
const Card = ({ user, location, image, likes, comments }) => {
  const auth = getAuth();
  const { getUsers, users, getOneUser, oneUser } = useContext(jsonUserContext);
  useEffect(() => {
    getUsers();
  }, []);
  const arr = users.find((item) => item.id == user);
  return (
    <div className={styles.main} key={user}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.userlogo}>
            <img src={arr.image} />
          </div>
          <div className={styles.userDate}>
            <div className={styles.userName}>{arr.username}</div>
            <div className={styles.userPosition}>{location}</div>
          </div>
          <div className={styles.burger}>. . .</div>
        </div>
        <div className={styles.content}>
          <img src={image} />
        </div>
        <div className={styles.communication}>
          <div className={styles.like}>
            {" "}
            <MdFavorite />{" "}
            <p
              style={{
                fontSize: "1rem",
                position: "absolute",
                left: "22%",
                top: "121%",
                color: "black",
              }}>
              {likes}
            </p>
          </div>
          <div className={styles.coment}>
            {" "}
            <FaRegComment />
            <p
              style={{
                fontSize: "1rem",
                position: "absolute",
                left: "26%",
                top: "121%",
              }}>
              {comments}
            </p>
          </div>
          <div className={styles.sending}>
            <LuSend />
          </div>
          <div className={styles.save}>
            <BsBookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
