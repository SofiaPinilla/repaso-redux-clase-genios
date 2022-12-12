import axios from "axios";

const API_URL = "http://localhost:8080";

const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/posts/getPosts");
  return res.data;
};

const getPostById = async (id)=>{
    const res = await axios.get(API_URL +"/posts/getPostById/" + id)
    return res.data
}

const postsService = {
  getAllPosts,
  getPostById
};

export default postsService;