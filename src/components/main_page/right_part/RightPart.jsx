import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.css";
import TextField from "@mui/material/TextField";
import { jsonUserContext } from "../../../contexts/auth/JsonServerUserContext";
import { getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom";

const RightPart = () => {
  const auth = getAuth();
  const { getUsers, users, defaultAvatar } = useContext(jsonUserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (item) =>
        item.id !== auth.currentUser.uid &&
        item.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredUsers(filtered);
  }, [searchQuery, users, auth.currentUser.uid]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.main}>
      <TextField
        id="filled-basic"
        variant="filled"
        className={styles.input}
        label="search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className={styles.ul}>
        {filteredUsers.map((item) => (
          <NavLink
            to={`/profile/${item.id}`}
            className={styles.navlink}
            key={item.id}
          >
            <li className={styles.li}>
              <img
                src={item.photoUrl}
                onError={defaultAvatar}
                className={styles.avatar}
                alt={`Avatar of ${item.username}`}
              />
              <span className={styles.username}>{item.username}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default RightPart;
