import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios'
import { formatISO9075 } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const[postInfo,setPostInfo] = useState(null);
    const {id} = useParams();
useEffect(() =>{
    axios.get(`http://localhost:8000/postbyid/${id}`)
    .then((res) => setPostInfo(res.data))
    .catch((err)=> console.log(err))
},[])
//    console.log(:"aagya")
  if(!postInfo) return '';
  return (
    <div>
      
     <Text size={'400'}>{postInfo.title}</Text>
 <Box width={500} height={400} mr={4}>

    <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
       <Text>{`${postInfo.author.firstname} ${postInfo.author.lastname}`}</Text>
          <Image src={'http://localhost:8000/' + postInfo.cover} alt={"at"} objectFit="cover" width="100%" height="100%" />
        </Box>
   
  <div dangerouslySetInnerHTML={{ __html : postInfo.content}}/>

 
    </div>
  )
}

export default PostPage