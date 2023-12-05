import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { MdFavorite } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { getAuth } from "firebase/auth";
import { jsonUserContext } from "../../../../contexts/auth/JsonServerUserContext";
import { postContext } from "../../../../contexts/CreatePostContext";
const Card = ({ user, location, image, showComments, keyid }) => {
  const auth = getAuth();
  const { getUsers, users, getOneUser, oneUser, defaultAvatar } =
    useContext(jsonUserContext);
  const { getPosts, posts, updatePost, isLiked } = useContext(postContext);
  const [iconColor, setIconColor] = useState("");
  useEffect(() => {
    getUsers();
    getOneUser(auth.currentUser.uid);
    getPosts();
    if (isLiked(keyid, auth.currentUser.uid)) {
      setIconColor("red");
    }
  }, []);

  const post = posts.find((item) => item.id == keyid);
  const handleIconClick = (e) => {
    if (iconColor === "") {
      setIconColor("red");
      post.likes.push({
        photoUrl: oneUser.photoUrl,
        username: oneUser.username,
        id: oneUser.id,
      });
      updatePost(post, keyid);
    } else {
      setIconColor("");
      post.likes = post.likes.filter((item) => item.id !== oneUser.id);
      updatePost(post, keyid);
    }
  };
  const arr = users.find((item) => item.id == user);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.header}>
          <img
            src={arr.photoUrl}
            className={styles.avatar}
            onError={defaultAvatar}
          />
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
            <MdFavorite
              onClick={handleIconClick}
              id={keyid}
              style={{ color: iconColor }}
            />{" "}
            <p className={`${styles.numOfLikes}`}>{post.likes.length}</p>
          </div>
          {showComments ? (
            <div className={styles.coment}>
              {" "}
              <FaRegComment />
              <p className={styles.numOfComments}>{post.comments.length}</p>
            </div>
          ) : null}
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
