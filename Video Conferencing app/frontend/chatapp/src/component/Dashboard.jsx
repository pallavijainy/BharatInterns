import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "./Dashboard.css";

const MainDashboard = () => {
  return (
    <Box id="main_dashboard">
      <Box id="ïmg1">
        <Image
          className="img1_main"
          src="https://user-images.githubusercontent.com/115463536/229345353-f12c3416-fa09-4d7c-8190-a42273105e9a.gif"
          alt=""
        />
      </Box>
      <Box
        id="main_img_info"
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="4"
        marginTop="5%"
      >
        <a href="https://talkies-video-chat.netlify.app?type=videochat">
          <Box
            className="div_img_info"
            textAlign="center"
            textDecoration="none"
            color="black"
            borderRadius="10%"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
            height={{ base: "300px", md: "70%" }}
          >
            <Image
              className="img_info"
              src="https://user-images.githubusercontent.com/115463536/229345389-d7c5186e-d34c-46fa-a5e7-3b63815f9305.gif"
              alt=""
              height={{ base: "75%", md: "100%" }}
              borderRadius="10%"
            />
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Video Call
            </Text>
          </Box>
        </a>
        <a href="https://talkies-share-screen.netlify.app?type=screenshare">
          <Box
            className="div_img_info"
            textAlign="center"
            textDecoration="none"
            color="black"
            borderRadius="10%"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
            height={{ base: "300px", md: "70%" }}
          >
            <Image
              className="img_info"
              src="https://user-images.githubusercontent.com/115463536/229345427-8a022b0e-2638-4ce3-b4e2-ffc94ba79745.gif"
              alt=""
              height={{ base: "75%", md: "100%" }}
              borderRadius="10%"
            />
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Screen Share
            </Text>
          </Box>
        </a>
        <a href="https://talkies-lets-connect.netlify.app/room.html?type=message">
          <Box
            className="div_img_info"
            textAlign="center"
            textDecoration="none"
            color="black"
            borderRadius="10%"
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.1)" }}
            height={{ base: "300px", md: "70%" }}
          >
            <Image
              className="img_info"
              src="https://user-images.githubusercontent.com/115463536/229345461-fd213545-2b3c-4ae0-93f3-ef1f5e725eff.gif"
              alt=""
              height={{ base: "75%", md: "100%" }}
              borderRadius="10%"
            />
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              Message
            </Text>
          </Box>
        </a>
        <Box
          as="span"
          id="logout"
          className="div_img_info"
          textAlign="center"
          textDecoration="none"
          color="black"
          borderRadius="10%"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.1)" }}
          height={{ base: "300px", md: "70%" }}
        >
          <Image
            className="img_info"
            src="https://user-images.githubusercontent.com/115463536/229345490-98dd7120-789b-4411-899d-4a8ad9c84b5c.gif"
            alt=""
            height={{ base: "75%", md: "100%" }}
            borderRadius="10%"
          />
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
            Logout
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MainDashboard;
