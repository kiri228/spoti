import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import Card from "./card/Card";
import { postContext } from "../../../contexts/CreatePostContext";

const Center = () => {
  const { getPosts, posts } = useContext(postContext);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className={styles.main}>
      {/* {posts.map((item) => (
        <Card
          user={item.user}
          image={item.image}
          location={item.location}
          likes={item.likes}
          comments={item.comments}
        /> ))}*/}
      <Card />
    </div>
  );
};

export default Center;
