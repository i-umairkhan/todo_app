import SignUp from "../../Component/SignUp/SignUp";
import Login from "../../Component/Login/Login";
import "./Auth.scss";
import React, { useEffect, useContext } from "react";
import { Chip, Divider } from "@mui/material";
import { SignOutUser } from "../../firebase";
import { userContext } from "../../Context/User";

const Auth = () => {
  // user api to get user data
  const userAPI = useContext(userContext);
  const { setUser } = userAPI;
  // use effect to signout user and set null in user context
  useEffect(() => {
    const userProcess = async () => {
      await SignOutUser(); // sign out all user
      setUser(null); // set null in contexti
    };
    userProcess();
  }, []);
  return (
    <div className="auth">
      <h1>todo app</h1>
      <div className="auth__components">
        <SignUp />
        <Divider orientation="vertical">
          <Chip label="Login To Continue..." />
        </Divider>
        <Login />
      </div>
    </div>
  );
};

export default Auth;
