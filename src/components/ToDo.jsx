import React from "react";
import { AiFillEdit } from "react/icons/ai";
import { BsFillTrash } from "react/icons/ai";
import { AiFillEdit } from "react/icons/ai";

const ToDo = ({ task }) => {
  return (
    <div className="">
      <p>{task.task}</p>
      <div>
        <AiFillEdit />
        <BsFillTrash />
      </div>
    </div>
  );
};

export default ToDo;
