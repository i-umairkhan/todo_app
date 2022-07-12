import "./Login.scss";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState, useContext } from "react";
import { SignInUser } from "../../firebase";
import { userContext } from "../../Context/User";

const Login = () => {
  // state to store inputs of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // to get context value from userContext
  const userAPI = useContext(userContext);
  const { user, setUser } = userAPI;
  // to login user function
  const handleSubmit = async () => {
    const userData = await SignInUser(email, password);
    setUser(userData); // setting userdata from firebase to contextapi user
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Passwrd"
        variant="standard"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button // sign up button
        variant="outlined"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
