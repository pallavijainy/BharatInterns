import {
  Box,
  ChakraProvider,
  Container,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./Message.css";
function Message() {
  const [roomID, setRoomID] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomIDParam = urlParams.get("roomID");
    setRoomID(roomIDParam);
  }, []);

  const handleLeaveRoom = () => {
    window.location.href = "./dashboard.html";
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) {
      return;
    }

    // Add your logic to emit the chat message to the server

    setMessageText("");
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Box id="logo">
          <Image src="./images/logo.png" alt="" />
        </Box>

        <VStack spacing={4} align="center">
          <Text>Welcome to Talkies Chat Platform</Text>

          <Box id="main">
            <Box id="room-user">
              <Box id="room">
                <Text id="room-name">
                  Room-ID :-&nbsp;&nbsp;<span id="room-id">{roomID}</span>
                </Text>
              </Box>

              <Box id="user-online">
                <Text id="user-heading">Members</Text>
                <Box id="members">
                  {users.map((user, index) => (
                    <Text key={index}>{user.username}</Text>
                  ))}
                </Box>
              </Box>
              <Box id="leave" onClick={handleLeaveRoom}>
                Leave Room
              </Box>
            </Box>

            <Box id="message-container">
              <Text id="msgs">Messages</Text>

              <Box id="messages">
                {messages.map((message, index) => (
                  <Box key={index} className="message">
                    <Text className="meta">
                      {message.username}
                      <span>{message.time}</span>
                    </Text>
                    <Text className="text">{message.text}</Text>
                  </Box>
                ))}
              </Box>

              <Box id="type-message">
                <input
                  type="text"
                  id="text"
                  placeholder="Type Your message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  required
                />
                <Box id="send" onClick={handleSendMessage}>
                  Send
                </Box>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default Message;
