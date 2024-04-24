import React, { useState } from "react";

const Form = ({ createToDo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    createToDo(value);
    setValue("");
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          className=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
