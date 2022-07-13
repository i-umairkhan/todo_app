import "./Login.scss";
import React from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { useState, useContext } from "react";
import { SignInUser } from "../../firebase";
import { userContext } from "../../Context/User";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // to use navigation
  const navigate = useNavigate();
  // state to store inputs of email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // to get context value from userContext
  const userAPI = useContext(userContext);
  const { setUser } = userAPI;
  // to login user function
  const handleSubmit = async () => {
    // getting data from firebase
    try {
      const userData = await SignInUser(email, password);
      setUser(userData); // setting userdata from firebase to contextapi user
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      // error cheacking
      switch (error.code) {
        case "auth/user-not-found": // user not found error
          alert("User Not Found");
          break;
        case "auth/wrong-password": // wrong password wrror
          alert("Wrong Password");
          break;
        case "auth/invalid-email": // invalid email error
          alert("Invalid Email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>
      {/* Email text feild */}
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* password text feild */}
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
