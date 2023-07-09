import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";

import Singup from "../component/Singup";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Singup />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default RouterPage;
