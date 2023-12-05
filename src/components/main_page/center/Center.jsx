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
      {posts.map((item) => (
        <Card
          keyid={item.id}
          user={item.user}
          image={item.image}
          location={item.location}
          likes={item.likes}
          comments={item.comments}
          showComments={item.show_comments}
        />
      ))}
    </div>
  );
};

export default Center;
