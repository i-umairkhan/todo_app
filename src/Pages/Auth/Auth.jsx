import SignUp from "../../Component/SignUp/SignUp";
import Login from "../../Component/Login/Login";
import "./Auth.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Chip, Divider } from "@mui/material";

const Auth = () => {
  return (
    <div className="auth">
      <SignUp />
      <Divider orientation="vertical">
        <Chip label="TODO APP" />
      </Divider>
      <Login />
    </div>
  );
};

export default Auth;
