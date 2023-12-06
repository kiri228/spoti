import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import Left_part from "../main_page/left_part/Left_part";
import { useParams } from "react-router-dom";
import { jsonUserContext } from "../../contexts/auth/JsonServerUserContext";
import UserInfo from "../profile/UserInfo/UserInfo";
import Button from "@mui/material/Button";
import { postContext } from "../../contexts/CreatePostContext";
import { getAuth } from "firebase/auth";
const AlienProfile = () => {
  const { id } = useParams();
  const auth = getAuth();
  const { getUsers, users, updateUserFollowers, updateUserUnFollowers } =
    useContext(jsonUserContext);
  const { getPosts, posts } = useContext(postContext);
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  const userPosts = posts.filter((item) => item.user == id);
  const user = users.find((item) => item.id == id);
  const currentUser = users.find((item) => item.id == auth.currentUser.uid);
  const alreadyFollow = user.followers.some(
    (item) => item.id == auth.currentUser.uid
  );
  function handleClickFollow(e) {
    let newFollower = { username: currentUser.username, id: currentUser.id };
    updateUserFollowers(user.followers, newFollower, user.id);
  }
  function handleClickUnfollow(e) {
    updateUserUnFollowers(user.followers, currentUser.id, user.id);
  }
  return (
    <div className={styles.main}>
      <Left_part />
      <div className={styles.mainContent}>
        <div className={styles.left}>
          <img src={user.photoUrl} className={styles.avatar} />
        </div>
        <div className={styles.right}>
          <div className={styles.usernameDiv}>
            <h2 className={styles.username}>{user.username}</h2>
          </div>
          <div className={styles.extraInfo}>
            <span>{userPosts.length} posts </span>
            <span>{user.followers.length} followers</span>
          </div>
          <p className={styles.BIO}>{user.description}</p>
          <div className={styles.button}>
            {alreadyFollow ? (
              <Button variant="outlined" onClick={handleClickUnfollow}>
                Unfollow
              </Button>
            ) : (
              <Button variant="contained" onClick={handleClickFollow}>
                Follow
              </Button>
            )}
          </div>
          <div className={styles.content}>
            {userPosts.map((item) => (
              <img className={styles.img} src={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlienProfile;
