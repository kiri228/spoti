import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
export const jsonUserContext = createContext();

const JsonServerUserContext = ({ children }) => {
  const auth = getAuth();

  const Apiusers = "http://localhost:8000/users_extra_info";
  const [oneUser, setOneUser] = useState({});
  const [users, setUsers] = useState([]);
  async function updateUserProfile(obj) {
    const { description, image, email, name, phoneNumber, gender } = obj;
    await axios.patch(Apiusers + "/" + auth.currentUser.uid, {
      phoneNumber: phoneNumber ? phoneNumber : "",
      photoUrl: image ? image : "",
      description: description ? description : "",
      name: name ? name : "",
      gender: gender ? gender : "",
    });
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
  return (
    <jsonUserContext.Provider
      value={{
        oneUser,
        users,
        getUsers,
        updateUserProfile,
        getOneUser,
      }}>
      {children}
    </jsonUserContext.Provider>
  );
};

export default JsonServerUserContext;
