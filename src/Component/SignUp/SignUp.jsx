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
    // sign up user
    try {
      await createUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      // if error occuers
      switch (error.code) {
        // email alredy used error
        case "auth/email-already-in-use":
          alert("Email Alredy Used");
          break;
        // weak password error
        case "auth/weak-password":
          alert("Weak Password");
          break;
        // invalid email error
        case "auth/invalid-email":
          alert("Invalid Email");
          break;
        // default error
        default:
          console.log(error);
          break;
      }
    }
  };
  return (
    <div className="signup">
      <h2>Signup</h2>
      {/* Text feild for email*/}
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* Text feild for password*/}
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
