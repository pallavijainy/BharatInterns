import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";

import Singup from "../component/Singup";
import Dashboard from "./../component/Dashboard";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default RouterPage;
