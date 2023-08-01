import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodods] = useState([]);
  const addTask = (task) => {
    if (!task.text) {
      return;
    }
    const newTodos = [task, ...todos];
    setTodods(newTodos);
  };

  const removeTask=id=>{
    let updatedTasks=[...todos].filter(task=>task.id!=id)
    setTodods(updatedTasks)
  }
const completeTask=id=>{
let updatedTasks=todos.map(
todo=>{
    if(todo.id==id){
        todo.isComplte=true;
    }
    return todo;
}

)
setTodods(updatedTasks)
}
  return (
    <div>
      <TodoForm addTaks={addTask} />
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}/>
    </div>
  );
};

export default TodoList;
