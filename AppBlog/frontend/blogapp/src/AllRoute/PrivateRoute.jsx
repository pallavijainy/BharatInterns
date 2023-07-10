import React, { useContext } from "react";

import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { userInfo } = useContext(UserContext);

  if (!userInfo) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoutes;
