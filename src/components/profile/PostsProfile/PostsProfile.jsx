import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { getAuth } from "firebase/auth";
import { postContext } from "../../../contexts/CreatePostContext";
const PostsProfile = ({ state }) => {
  const auth = getAuth();
  const { getPosts, posts } = useContext(postContext);
  useEffect(() => {
    getPosts();
  }, []);
  const postsUsers = posts.filter((item) => auth.currentUser.uid == item.user);
  return (
    <div styles={styles.main}>
      <div className={styles.content}>
        {postsUsers.map((item) => (
          <img className={styles.img} src={item.image} />
        ))}
      </div>
    </div>
  );
};

export default PostsProfile;
