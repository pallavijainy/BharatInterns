import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../component/Login";
import Message from "../component/Message";
import Room from "../component/Room";
import ScreenShare from "../component/Screenshare";

import Singup from "../component/Singup";
import VideoChat from "../component/VideoChat";
import Dashboard from "./../component/Dashboard";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/room" element={<Room />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/screenshare" element={<ScreenShare />}></Route>
      <Route path="/videochat" element={<VideoChat />}></Route>
    </Routes>
  );
};

export default RouterPage;
