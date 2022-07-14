import "./Home.scss";

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onAddHandler = () => {
    todoInput
      ? setTodoList((pre) => [...pre, todoInput])
      : setTodoList((pre) => [...pre]);
    setTodoInput("");
  };
  return (
    <div className="home">
      <h1>todo app</h1>
      <div className="home__input">
        <TextField
          id="filled-basic"
          label="Enter todo"
          variant="filled"
          value={todoInput}
          autoComplete="off"
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button
          variant="contained"
          className="add__button"
          onClick={onAddHandler}
        >
          +
        </Button>
      </div>
      <div className="list">
        {todoList.map((item) => {
          return (
            <div className="list__item" key={todoList.indexOf(item)}>
              {todoList.indexOf(item) + 1} {` . `}
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
