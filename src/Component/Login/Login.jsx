import "./Login.scss";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { SignInUser } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <h2>LogIn</h2>
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
        onClick={async () => {
          SignInUser(email, password);
          setEmail("");
          setPassword("");
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
