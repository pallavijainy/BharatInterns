import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post';
const ShowPost = () => {
 const[post,setPost] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/posts');
        setPost(response.data); 
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
  return (
    <div>
        {post.length>0 && post.map(p =>( 
          
            <Post{...p}/>
        ))}
    </div>
  )
}

export default ShowPost