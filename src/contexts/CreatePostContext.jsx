import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import axios from "axios";

export const postContext = createContext();

const CreatePostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const API = "http://localhost:8000/posts";
  useEffect(() => {
    getPosts();
  }, []);
  async function createPost(obj) {
    await axios.post(API, obj);
    getPosts();
  }
  async function deletePost(id) {
    await axios.delete(API + id);
    getPosts();
  }
  async function updatePost(obj, id) {
    await axios.put(API + id, obj);
  }
  async function getPost(id) {
    let res = axios.get(API + id);
    setPost(res.data);
  }
  async function getPosts() {
    let res = await axios.get(API);
    setPosts(res.data);
  }
  return (
    <postContext.Provider
      value={{
        createPost,
        post,
        posts,
        deletePost,
        getPost,
        getPosts,
        updatePost,
      }}>
      {children}
    </postContext.Provider>
  );
};

export default CreatePostContext;
