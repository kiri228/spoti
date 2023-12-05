import React, { useState } from "react";
import styles from "./style.module.css";
import Left_part from "../main_page/left_part/Left_part";
import UserInfo from "./UserInfo/UserInfo";
import Button from "@mui/material/Button";
import PostsProfile from "./PostsProfile/PostsProfile";
import { getAuth } from "firebase/auth";
import SavedProfile from "./SavedProfile/SavedProfile";
import { NavLink } from "react-router-dom";
const Profile = () => {
  const auth = getAuth();
  const [switchPosts, setSwitchPosts] = useState("posts");
  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        <Left_part />
        <UserInfo auth={auth} />
      </div>
      <div className={styles.postsOrSaved}>
        <div className={styles.switchButtons}>
          <Button
            style={{
              backgroundColor: switchPosts == "posts" ? "darkblue" : "initial",
            }}
            variant="text"
            onClick={(e) => {
              setSwitchPosts("posts");
            }}>
            Posts
          </Button>

          <Button
            style={{
              backgroundColor: switchPosts == "saved" ? "darkblue" : "initial",
            }}
            variant="text"
            onClick={() => {
              setSwitchPosts("saved");
            }}>
            Saved
          </Button>
        </div>
        {switchPosts == "posts" ? <PostsProfile /> : <SavedProfile />}
      </div>
    </div>
  );
};

export default Profile;
