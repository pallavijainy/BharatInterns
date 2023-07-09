import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./Screenshare.css";

function ScreenShare() {
  const [roomInput, setRoomInput] = useState("");

  const handleRoomInputChange = (event) => {
    setRoomInput(event.target.value);
  };

  const createRoom = () => {
    // Add your create room logic here
  };

  const joinRoom = () => {
    // Add your join room logic here
  };

  const startScreenShare = () => {
    // Add your start screen share logic here
  };

  const stopScreenSharing = () => {
    // Add your stop screen sharing logic here
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Center>
          <img src="./Images/logo.png" alt="icon" />
        </Center>
        <Text id="roomID" textAlign="center" mt={4}></Text>
        <Box id="videoDiv" mt={4}></Box>
        <Container maxW="container.md" mt={4}>
          <VStack spacing={4}>
            <Box className="meet-area">
              <video id="remote-video"></video>
              <video id="local-video"></video>
              <Box className="meet-controls-bar">
                <Button colorScheme="warning" onClick={startScreenShare}>
                  Start Share
                </Button>
                <Button colorScheme="warning" onClick={stopScreenSharing}>
                  Stop Share
                </Button>
              </Box>
            </Box>
            <Input
              placeholder="Enter room ID"
              value={roomInput}
              onChange={handleRoomInputChange}
            />
            <Button colorScheme="blue" onClick={createRoom}>
              Create Room
            </Button>
            <Button colorScheme="blue" onClick={joinRoom}>
              Join Room
            </Button>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default ScreenShare;
