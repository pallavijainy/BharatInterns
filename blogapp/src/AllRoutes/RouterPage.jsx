import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../component/AddPage";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/addPage" element={<AddPage />} />
    </Routes>
  );
};

export default RouterPage;
