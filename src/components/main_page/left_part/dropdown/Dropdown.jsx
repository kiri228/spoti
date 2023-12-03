import React, { useContext } from "react";
import styles from "./style.module.css";
import { useAuth } from "../../../../contexts/auth/AuthContextProvider";
import { getAuth } from "firebase/auth";
const Dropdown = ({ state }) => {
  const { logout } = useAuth();
  const auth = getAuth();
  const { updateUserProfile, getOneUser } = useAuth();
  return (
    <div className={styles.main} style={{ display: `${state}` }}>
      <div className={styles.settings}>
        <button>Saved</button>
        <button>Switch appearence</button>
        <button>Report a problem</button>
      </div>
      <div className={styles.accounts}>
        <button>Switch accounts</button>
        <button
          onClick={(e) => {
            logout();
          }}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
