import React, { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const ToDoList = () => {
  const [toDoValue, setToDo] = useState([]);

  const createToDo = (toDo) => {
    setToDo([...toDoValue, { id: uuidv4(), task: toDo, isEditing: false }]);
  };

  return (
    <div className="">
      <Form createToDo={createToDo} />
      {toDoValue.map((todo, idx) => (
        <ToDo task={todo} key={idx} />
      ))}
    </div>
  );
};

export default ToDoList;
