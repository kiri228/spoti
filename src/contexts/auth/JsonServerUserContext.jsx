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
  const Apiusers = "http://localhost:8000/users_extra_info";
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
    axios.patch(Apiusers + "/" + auth.currentUser.uid, {
      phoneNumber: phoneNumber ? phoneNumber : "",
      photoUrl: image ? image : "",
      description: description ? description : "",
      name: name ? name : "",
      gender: gender ? gender : "",
      username: username,
    });
    navigate("/profile");
  }

  useEffect(() => {
    getUsers();
  }, []);
  async function getOneUser(id) {
    if (!id) {
      return;
    }
    let res = await axios.get(Apiusers + "/" + id);
    setOneUser(res.data);
  }
  async function getUsers() {
    let res = await axios.get(Apiusers);
    setUsers(res.data);
  }
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
      }}>
      {children}
    </jsonUserContext.Provider>
  );
};

export default JsonServerUserContext;
