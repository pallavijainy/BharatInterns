import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import image from "../images/Popular-social-media-Blogger-logo-on-transparent-PNG.png";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userInfo, setUserInfo } = useContext(UserContext);

  console.log("userInfo=========>", userInfo);

  const logout = async () => {
    try {
      console.log(userInfo, "==========>USER@");
      await axios.post("http://localhost:8000/logout", null, {
        withCredentials: true,
      });
      setUserInfo(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        console.log(userInfo, "=======> userInfo");
        setUserInfo({ email: userInfo.email, id: userInfo.id });
      });
    });
  }, []);
  const user = userInfo?.email;

  return (
    <Box bg="gray.900" color="white">
      {user && (
        <Flex p={4} align="center">
          <Box>
            <Image width={"50px"} src={image} alt="Logo" />
          </Box>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onOpen}
            aria-label="Open menu"
            ml="auto"
            display={{ base: "block", md: "none" }}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="gray.900" color="white">
              <DrawerCloseButton color="white" />
              <DrawerBody p={0}>
                <Flex direction="column" p={4}>
                  <Link to="/">
                    {" "}
                    <Button
                      variant="ghost"
                      color="white"
                      mb={4}
                      onClick={onClose}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="/createpost">
                    {" "}
                    <Button variant="ghost" color="white" mr={4}>
                      Create Post
                    </Button>
                  </Link>
                  <Link to="/showpost">
                    <Button variant="ghost" color="white" mr={4}>
                      Blogs
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      onClick={logout}
                      variant="ghost"
                      color="white"
                      mb={4}
                    >
                      Logout
                    </Button>
                  </Link>
                  <Link to="/">
                    {" "}
                    <IconButton
                      as={Link}
                      to="/"
                      colorScheme="teal"
                      aria-label="Profile"
                      icon={<RiUserLine />}
                      borderRadius="full"
                    />
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Flex ml="auto" display={{ base: "none", md: "flex" }}>
            <Link to="/">
              <Button variant="ghost" color="white" mr={4}>
                Home
              </Button>
            </Link>
            <Link to="/createpost">
              {" "}
              <Button variant="ghost" color="white" mr={4}>
                Create Post
              </Button>
            </Link>
            <Link to="/showpost">
              <Button variant="ghost" color="white" mr={4}>
                Blogs
              </Button>
            </Link>
            <Link>
              <Button onClick={logout} variant="ghost" color="white" mb={4}>
                Logout
              </Button>
            </Link>
            <Link to="/">
              {" "}
              <IconButton
                as={Link}
                to="/"
                colorScheme="teal"
                aria-label="Profile"
                icon={<RiUserLine />}
                borderRadius="full"
              />
            </Link>
          </Flex>
        </Flex>
      )}
      {!user && (
        <Flex p={4} align="center">
          <Box>
            <Image src={image} alt="Logo" width={"50px"} />
          </Box>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onOpen}
            aria-label="Open menu"
            ml="auto"
            display={{ base: "block", md: "none" }}
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="gray.900" color="white">
              <DrawerCloseButton color="white" />
              <DrawerBody p={0}>
                <Flex direction="column" p={4}>
                  <Link to="/">
                    {" "}
                    <Button
                      variant="ghost"
                      color="white"
                      mb={4}
                      onClick={onClose}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link to="/about">
                    {" "}
                    <Button
                      variant="ghost"
                      color="white"
                      mb={4}
                      onClick={onClose}
                    >
                      About
                    </Button>
                  </Link>
                  <Link to="/showpost">
                    <Button variant="ghost" color="white" mr={4}>
                      Blogs
                    </Button>
                  </Link>
                  <Link to="/login">
                    {" "}
                    <Button
                      variant="ghost"
                      color="white"
                      mb={4}
                      onClick={onClose}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <Button variant="ghost" color="white" onClick={onClose}>
                      Sign Up
                    </Button>
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Flex ml="auto" display={{ base: "none", md: "flex" }}>
            <Link to="/">
              <Button variant="ghost" color="white" mr={4}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              {" "}
              <Button variant="ghost" color="white" mr={4}>
                About
              </Button>
            </Link>
            <Link to="/showpost">
              <Button variant="ghost" color="white" mr={4}>
                Blogs
              </Button>
            </Link>
            <Link to="/login">
              {" "}
              <Button variant="ghost" color="white" mr={4}>
                Login
              </Button>
            </Link>
            <Link to="/signup">
              {" "}
              <Button colorScheme="teal" variant="solid">
                Sign Up
              </Button>
            </Link>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
