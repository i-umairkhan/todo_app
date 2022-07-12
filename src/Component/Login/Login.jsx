import "./Login.scss";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { SignInUser } from "../../firebase";

const Login = () => {
  // state to store inputs of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // to login user function
  const handleSubmit = async () => {
    SignInUser(email, password);
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
