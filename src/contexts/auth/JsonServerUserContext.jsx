import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
export const jsonUserContext = createContext();

const JsonServerUserContext = ({ children }) => {
  const auth = getAuth();

  const Apiusers = "http://localhost:8000/users_extra_info";
  const [oneUser, setOneUser] = useState({});
  const [users, setUsers] = useState([]);
  async function updateUserProfile(
    description,
    image,
    name,
    phoneNumber,
    gender
  ) {
    console.log(auth.currentUser.uid);
    await axios.patch(Apiusers + "/" + auth.currentUser.uid, {
      phoneNumber: phoneNumber,
      photoUrl: image,
      description: description,
      name: name,
      gender: gender,
    });
  }
  useEffect(() => {
    getUsers();
  }, []);
  async function getOneUser() {
    let res = await axios.get(Apiusers + "/" + auth.currentUser.uid);
    setOneUser(res.data);
  }
  async function getUsers() {
    let res = axios.get(Apiusers);
    setUsers(res);
  }
  return (
    <jsonUserContext.Provider
      value={{
        oneUser,
        users,
        updateUserProfile,
        getOneUser,
      }}>
      {children}
    </jsonUserContext.Provider>
  );
};

export default JsonServerUserContext;
