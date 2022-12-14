import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  if (!post) {
    return <h1>cargando...</h1>;
  }
  return (
    <div>
      PostDetail
      <p>User: {post.User?.name}</p>
      <p>Post Title: {post.title}</p>
      <p>Post Content: {post.content}</p>
    </div>
  );
};

export default PostDetail;
