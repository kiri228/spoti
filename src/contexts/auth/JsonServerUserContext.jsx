import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../../images/default.jpeg";
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const jsonUserContext = createContext();

const JsonServerUserContext = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [oneUser, setOneUser] = useState({});
  const [users, setUsers] = useState([]);
  async function updateUserProfile(obj) {
    getOneUser(auth.currentUser.uid);
    const { description, image, username, name, phoneNumber, gender } = obj;
    if (username.length < 3) {
      alert("wrong data");
      return;
    }
    alert("success edit");
  }
  async function updateUserFollowers(prevArr, obj, id) {
    getOneUser(auth.currentUser.uid);
    alert("success edit");
    let final = prevArr;
    final.push(obj);
  }
  async function updateUserUnFollowers(array, deleteId, id) {
    navigate("/");
  }
  useEffect(() => {
    getUsers();
  }, []);
  async function getOneUser(id) {
    if (!id) {
      return;
    }
  }
  async function getUsers() {}
  function defaultAvatar(e) {
    e.target.src = `${defaultImage}`;
  }
  return (
    <jsonUserContext.Provider
      value={{
        oneUser,
        users,
        getUsers,
        updateUserProfile,
        getOneUser,
        defaultAvatar,
        updateUserFollowers,
        updateUserUnFollowers,
      }}>
      {children}
    </jsonUserContext.Provider>
  );
};

export default JsonServerUserContext;
