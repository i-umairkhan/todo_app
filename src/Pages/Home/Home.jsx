import "./Home.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const Home = () => {
  // input feild to write todo
  const [todoInput, setTodoInput] = useState("");
  // array to store all todos
  const [todoList, setTodoList] = useState([]);
  // to handle add button functionality
  const onAddHandler = () => {
    // if todoinput exsists then set todoList to all previous + new todo
    todoInput
      ? setTodoList((pre) => [...pre, todoInput])
      : setTodoList((pre) => [...pre]);
    setTodoInput(""); // clear input
  };
  // //  delet todo function
  const handleDelet = (index) => {
    const newList = todoList.filter((ele) => {
      return todoList.indexOf(ele) !== index;
    });
    setTodoList(newList);
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
      {/* List to show todos */}
      <div className="list">
        {/* Mapping over list  and displaying every todo item*/}
        {todoList.map((item) => {
          return (
            <div className="list__item" key={todoList.indexOf(item)}>
              {todoList.indexOf(item) + 1} {` . `}
              {item}
              <div className="icons">
                <EditIcon fontSize="8px" />
                <CloseIcon
                  fontSize="8px"
                  onClick={() => handleDelet(todoList.indexOf(item))}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
