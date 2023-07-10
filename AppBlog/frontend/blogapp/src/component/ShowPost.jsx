import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { Box } from "@chakra-ui/react";
const ShowPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return <Box>{post.length > 0 && post.map((p) => <Post {...p} />)}</Box>;
};

export default ShowPost;
