import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Todo = (todos, completeTask, removeTask) => {
  return todos.map((todo, index) => (
    <div
      className={todo.iscomplete ? "complete task-div" : "task-div"}
      key={index}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="icons" key={todo.id}>
        <TiTick
          className={todo.iscomplete ? "hide" : "tick"}
          onClick={() => {
            completeTask(todo.id);
          }}
        />
        <RiCloseCircleLine
          className="cross"
          onClick={() => {
            removeTask(todo.id);
          }}
        />
      </div>
    </div>
  ));
};

export default Todo;
