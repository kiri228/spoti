import React, { createContext, useEffect, useState } from "react";
import defaultImage from "../../images/default.jpeg";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const jsonUserContext = createContext();

const JsonServerUserContext = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [oneUser, setOneUser] = useState({});
  const [users, setUsers] = useState([]);
  return (
    <jsonUserContext.Provider
      value={{
        oneUser,
        users,
      }}>
      {children}
    </jsonUserContext.Provider>
  );
};

export default JsonServerUserContext;
