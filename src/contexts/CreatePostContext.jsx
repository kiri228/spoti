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
    await axios.delete(API + "/" + id);
    getPosts();
  }
  async function updatePost(id, obj, prevComments) {
    const u = prevComments;
    u.push(obj);
    await axios.patch(API + "/" + id, {
      comments: u,
    });
    getPosts();
  }
  async function getPost(id) {
    let res = await axios.get(API + "/" + id);
    setPost(res.data);
  }
  function isLiked(postId, user) {
    let post = posts.find((item) => item.id == postId);
    if (post.likes.find((item) => item.id == user)) {
      return true;
    }
    return false;
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
        isLiked,
      }}>
      {children}
    </postContext.Provider>
  );
};

export default CreatePostContext;
