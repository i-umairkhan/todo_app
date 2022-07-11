import SignUp from "../Component/SignUp/SignUp";
import Login from "../Component/Login/Login";
import "./Auth.scss";
import React from "react";

const Auth = () => {
  return (
    <div className="auth">
      <SignUp />
      <Login />
    </div>
  );
};

export default Auth;
