import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { formatISO9075 } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { bg } from "date-fns/locale";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);

  const param = useParams();
  console.log(param);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/postbyid/${param.id}`)
      .then((res) => setPostInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  //    console.log(:"aagya")
  if (!postInfo) return "";

  return (
    <Box m={10} mt={70}>
      <Text fontSize="xl" fontWeight="bold">
        {postInfo.title}
      </Text>
      <time style={{ color: "gray", fontSize: "small" }}>
        {formatISO9075(new Date(postInfo.createdAt))}
      </time>
      <Text mb={7} fontSize="sm" fontWeight="medium">
        by @{`${postInfo.author.firstname} ${postInfo.author.lastname}`}
      </Text>
      {userInfo?.id === postInfo?.author._id && (
        <div style={{ marginBottom: "30px", fontSize: "30px" }}>
          <Link
            to={`/edit/${postInfo?._id}`}
            style={{
              backgroundColor: "#5f9ea0",

              borderRadius: "5px",

              display: "flex",
              justifyContent: "center",
              paddingLeft: "20px",
              paddingRight: "30px",
              paddingBottom: "30px",
              paddingTop: "20px",
              textDecoration: "none",
              color: "#000000",
              width: "20%",
              margin: "auto",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="w-1 h-1"
              style={{ marginRight: "5px" }}
              width={"50px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit post
          </Link>
        </div>
      )}
      <Box height={300} mb={10} mt={5}>
        <Image
          src={"http://localhost:8000/" + postInfo.cover}
          alt={"at"}
          width="100%"
          height="100%"
        />
      </Box>

      <Box
        fontSize="lg"
        fontWeight="medium"
        textAlign={"justify"}
        textColor={"blackAlpha.700"}
        className="centered-images"
      >
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </Box>
      <style jsx>{`
        .centered-images img {
          display: block;
          margin: 0 auto;
          width: 25%;
        }
      `}</style>
    </Box>
  );
};

export default PostPage;
