import React, { useEffect } from "react";
import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "./Loader";
import Footer from "./Footer";

// Import any additional CSS files here

const Dashboard = () => {
  const history = useHistory();

  useEffect(() => {
    userLoggedIn();
  }, []);

  const userLoggedIn = async () => {
    const token = localStorage.getItem("token");
    const request = await fetch(
      "https://talkies-authentication-server-1.onrender.com/user/check",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    );

    const response = await request.json();
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First",
      });
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    const request = await fetch(
      "https://talkies-authentication-server-1.onrender.com/user/logout",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    localStorage.clear();
    localStorage.setItem("signedIn", false);
    history.push("/login");
  };

  return (
    <>
      <Box id="main_dashboard">
        <Loader />
        <Box id="ïmg1">
          <Image
            className="img1_main"
            src="https://user-images.githubusercontent.com/115463536/229345353-f12c3416-fa09-4d7c-8190-a42273105e9a.gif"
            alt=""
          />
        </Box>
        <Box id="main_img_info">
          {/* Add your dashboard image components */}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
