import "./Home.scss";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { userContext } from "../../Context/User";
import { getTodoFromDataBase } from "../../firebase";

const Home = () => {
  // input feild to write todo in input box
  const [todoInput, setTodoInput] = useState("");
  // array to store all todos
  const [todoList, setTodoList] = useState([]);
  // get current email address of logedinn user
  const userAPI = useContext(userContext); // user context
  const userEmail = userAPI.user.user.email; // email of current user

  // to handle add button functionality
  const onAddHandler = () => {
    // if todoinput exsists then set todoList to all previous + new todo
    todoInput
      ? setTodoList((pre) => [...pre, { todo: todoInput, completed: false }])
      : setTodoList((pre) => [...pre]);
    setTodoInput(""); // clear input
  };

  //   delet todo function
  const handleDelet = (index) => {
    // create new todo list with all todos except of which index passed and set to todoList
    const newList = todoList.filter((ele) => {
      return todoList.indexOf(ele) !== index;
    });
    setTodoList(newList);
  };

  //   done todo function
  const handleDone = (index) => {
    // create new todo list with all todos as same except of which index passed -> completed -> toggle
    const newList = todoList.map((ele) => {
      return todoList.indexOf(ele) === index
        ? { todo: ele.todo, completed: ele.completed ? false : true }
        : ele;
    });
    setTodoList(newList);
  };

  useEffect(() => {
    const getTodo = async () => await getTodoFromDataBase(userEmail);
    getTodo();
  }, [userEmail]); 

  return (
    <div className="home">
      <h1>todo app</h1>
      <div className="home__input">
        {/* Text feild to write todo */}
        <TextField
          id="filled-basic"
          label="Enter todo"
          variant="filled"
          value={todoInput}
          autoComplete="off"
          onChange={(event) => setTodoInput(event.target.value)}
        />
        {/* Add todo button */}
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
            <div
              className={`list__item ${item.completed ? "done" : ""}`}
              key={todoList.indexOf(item)}
            >
              {todoList.indexOf(item) + 1} {` : `}
              {item.todo}
              {item.completed ? "  (done)" : ""}
              <div className="icons">
                {item.completed ? (
                  <RestartAltIcon
                    fontSize="8px"
                    onClick={() => handleDone(todoList.indexOf(item))}
                  />
                ) : (
                  <DoneIcon
                    fontSize="8px"
                    onClick={() => handleDone(todoList.indexOf(item))}
                  />
                )}
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
