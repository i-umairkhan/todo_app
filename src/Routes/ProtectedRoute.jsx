import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../Context/User";
import Auth from "../Pages/Auth/Auth";

// Protected route to cheack fro user loged inn
const ProtectedRoute = () => {
  const userAPI = useContext(userContext); // user api to get data from context
  const { user } = userAPI;
  return user ? <Outlet /> : <Navigate to="/" />; // if user then home else no
};

export default ProtectedRoute;
