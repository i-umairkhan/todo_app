import "./SignUp.scss";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { createUser } from "../../firebase";

const SignUp = () => {
  // state to handle email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // to handle submit functionality
  const handleSubmit = async () => {
    await createUser(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signup">
      <h2>Signup</h2>
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
        label="Password"
        variant="standard"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button // sign up button
        variant="outlined"
        onClick={handleSubmit}
      >
        Signup
      </Button>
    </div>
  );
};

export default SignUp;
