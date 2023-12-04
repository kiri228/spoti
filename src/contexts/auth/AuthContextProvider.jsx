import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { notify } from "../../components/Toastify";
import axios from "axios";
const ADMINS = ["admin@gmail.com"];
export const authContext = createContext();

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const AuthContextsProvider = ({ children }) => {
  const Apiusers = "http://localhost:8000/users_extra_info";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  async function register(email, password, displayName) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await axios.post(Apiusers, {
        phoneNumber: "",
        email: email,
        photoUrl: "",
        description: "",
        username: displayName,
        name: "",
        gender: "",
        id: auth.currentUser.uid,
      });
    } catch (error) {
      notify(error.code.split("/")[1], "error");
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      notify(error.code.split("/")[1], "error");
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (e) {
      notify(e.code.split("/")[1], "error");
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }
    return ADMINS.includes(user.email);
  }

  return (
    <authContext.Provider
      value={{
        register,
        user,
        logout,
        login,
        isAdmin,
        loading,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextsProvider;
