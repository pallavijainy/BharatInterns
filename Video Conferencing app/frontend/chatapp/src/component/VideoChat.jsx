import {
  Box,
  ChakraProvider,
  Container,
  Image,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./VideoChat.css";
function VideoChat() {
  const [roomID, setRoomID] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomIDParam = urlParams.get("roomID");
    setRoomID(roomIDParam);
  }, []);

  const handleHangup = () => {
    window.location.href = "./dashboard.html";
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Box id="logoDiv">
          <Image id="logo" src="./Images/logo.png" alt="" />
        </Box>

        <Text id="roomID" textAlign="center" mt={4}>
          Your Room ID is {roomID}, Happy Video-Chatting !!
        </Text>

        <Box id="videoDiv" mt={4}></Box>

        <Container maxW="container.md" mt={4}>
          <VStack spacing={4}>
            <Box id="controls">
              <Button id="hangup" onClick={handleHangup}>
                <a href="./dashboard.html">
                  <Image
                    className="icon"
                    src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/hang-up.png"
                    alt=""
                  />
                </a>
              </Button>
              <Button id="hide-video" className="icon-color">
                <Image
                  width="50px"
                  className="icon"
                  src="./images/cam.png"
                  alt=""
                />
              </Button>
              <Button id="hide-audio" className="icon-color">
                <Image className="icon" src="./images/mike.png" alt="" />
              </Button>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default VideoChat;
