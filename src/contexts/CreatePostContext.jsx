import React, { createContext, useContext, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";

export const postContext = createContext();
const CreatePostContext = ({ children }) => {
  const [id, setId] = useState(1);
  async function createPost(obj) {
    const db = getDatabase();
    set(ref(db, "posts/" + id), {});
  }

  return <postContext.Provider>{children}</postContext.Provider>;
};

export default CreatePostContext;
