import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  reauthenticateWithCredential,
} from "firebase/auth";

import { auth } from "../../firebase";

import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  async function register(email, password, displayName) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
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
      navigate("/login");
    } catch (e) {
      alert(e);
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
