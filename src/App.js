import React, { useState } from "react";
import TaskForm from "./components/TareaForm";
import Task from "./components/Tarea";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const newTask = (task) => {
    setTaskList([task, ...taskList]);
  };

  const erase = (id) => {
    const filterList = taskList.filter((e, index) => index !== id);
    setTaskList(filterList);
  };

  const updateTask = (id, task) => {
    const updatedList = taskList.map((e, index) => {
      if (index === id) {
        e = task;
      }

      return e;
    });

    setTaskList(updatedList);
  };

  return (
    <div>
      <header>
        <title>Task List</title>
        <h1>LISTA DE TAREAS</h1>
        <div className="Container">
          <TaskForm newTask={newTask} />

          <div className="list">
            {taskList.map(
              (
                e,
                index
              ) => (
                <Task
                  task={e}
                  erase={erase}
                  id={index}
                  edit={updateTask}
                  checked={!Task.completed}
                /> //
              )
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
