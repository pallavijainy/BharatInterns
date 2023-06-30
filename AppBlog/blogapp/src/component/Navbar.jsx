import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Box bg="gray.800" px={4} py={2}>
      <Flex alignItems="center">
        <Text color="white" fontSize="xl" fontWeight="bold">
          <Link to={"/"}>Logo</Link>
        </Text>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Button variant="ghost" color="white" mr={4}>
            <Link to={"/"}> Home</Link>
          </Button>
          <Button variant="ghost" color="white" mr={4}>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" color="white" mr={4}>
            <Link to={"/contact"}>Contact</Link>
          </Button>
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                color="white"
                mr={4}
                onClick={handleLogout}
              >
                <Link to={"/signup"}>Logout</Link>
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  color="white"
                  mr={4}
                  borderRadius="full"
                >
                  <Avatar size="sm" icon={<FaUserCircle />} />
                </MenuButton>
                <MenuList bg="white" color="gray.800">
                  <MenuItem>
                    {" "}
                    <Link to={"/profile"}>Profile</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
              variant="ghost"
              color="white"
              mr={4}
              onClick={handleLogin}
              _hover={{ bg: "white", color: "gray.800" }}
              _active={{ bg: "white", color: "gray.800" }}
              _focus={{ boxShadow: "none" }}
            >
              <Link to={"/signin"}>Login</Link>
            </Button>
          )}
        </Box>
        <Button
          display={{ base: "block", md: "none" }}
          variant="ghost"
          color="white"
          onClick={onToggle}
        >
          <FiMenu size={20} />
        </Button>
      </Flex>
      {isOpen && (
        <Box
          bg="gray.800"
          py={2}
          display={{ base: "block", md: "none" }}
          textAlign="center"
        >
          <Button variant="ghost" color="white" my={2} w="100%">
            <Link to={"/"}> Home</Link>
          </Button>
          <Button variant="ghost" color="white" my={2} w="100%">
            <Link to="/about">About</Link>
          </Button>
          <Button variant="ghost" color="white" my={2} w="100%">
            <Link to={"/contact"}>Contact</Link>
          </Button>
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                color="white"
                my={2}
                w="100%"
                onClick={handleLogout}
              >
                <Link to={"/signup"}>Logout</Link>
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  color="white"
                  my={2}
                  w="100%"
                  borderRadius="full"
                >
                  <Avatar size="sm" icon={<FaUserCircle />} />
                </MenuButton>
                <MenuList bg="white" color="gray.800">
                  <MenuItem>
                    <Link to={"/profile"}>Profile</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
              variant="ghost"
              color="white"
              my={2}
              w="100%"
              onClick={handleLogin}
              _hover={{ bg: "white", color: "gray.800" }}
              _active={{ bg: "white", color: "gray.800" }}
              _focus={{ boxShadow: "none" }}
            >
              <Link to={"/signin"}>Login</Link>
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
