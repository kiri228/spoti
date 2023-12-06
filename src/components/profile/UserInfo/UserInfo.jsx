import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { jsonUserContext } from "../../../contexts/auth/JsonServerUserContext";
import Button from "@mui/material/Button";
import { postContext } from "../../../contexts/CreatePostContext";
const UserInfo = ({ auth }) => {
  const { getOneUser, oneUser } = useContext(jsonUserContext);
  const { getPosts, posts } = useContext(postContext);
  useEffect(() => {
    getOneUser(auth.currentUser.uid);
    getPosts();
  }, []);
  if (Object.keys(oneUser).length === 0) {
    return;
  }
  const usersPosts = posts.filter((item) => item.user == auth.currentUser.uid);
  const followers = oneUser.followers.length;
  const followed = oneUser.followed.length;
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={oneUser.photoUrl} className={styles.avatar} />
      </div>
      <div className={styles.right}>
        <div className={styles.usernameDiv}>
          <h2 className={styles.username}>{oneUser.username}</h2>
          <NavLink to="/profile/edit">
            <Button
              variant="text"
              className={styles.button}
              style={{ color: "white", backgroundColor: "gray" }}>
              Edit
            </Button>
          </NavLink>
        </div>
        <p className={styles.bio}>{oneUser.description}</p>
        <div className={styles.extraInfo}>
          <span>{usersPosts.length} posts </span>
          <span>{followers} followers</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
