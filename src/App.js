import React, { useState } from "react";
import TaskForm from "./components/TareaForm";
import Task from "./components/Tarea";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]); //estado, los corchetes son porque las tareas son un array

  const newTask = (task) => {
    //estado con las tareas como parametro
    setTaskList([task, ...taskList]); //los tres puntos son el operador expred que hace una copia del array
  };
  //en pocas palabras se toma la funciòn para actualizar el estado, se està haciendo una copia del array y delante de la copia se añade la nueva tarea

  const erase = (id) => {
    //funciòn borrar y se le pasa el indice para identificar
    const filterList = taskList.filter((e, index) => index !== id); //funciòn filtrar tarea, la lista de tareas y el metodo filtrar, elemento e indice, y la condiciòn de que un id no sea igual al otro
    setTaskList(filterList);
  };

  const updateTask = (id, task) => {
    //actualizar tarea, identificador y la tarea funciòn flecha
    const updatedList = taskList.map((e, index) => {
      //se pasa la ista actualizada (puede que sea un estado) y la lista de tareas, creamos una copia mediante map, el elemento y el indice
      //filtra la lista para eliminar el item deseado la condiciòn es que el id no sea igual a otro indice
      if (index === id) {
        //si el indice es igual a id
        e = task; //el elemento es igual a la tarea editada
      }

      return e; //retornar elemento
    });

    setTaskList(updatedList); //enviar lista de tarea (con sus actualizaciones) o la lista actualizada
  };

  /*const checkBox = (id, task) => {updatedList = taskList.map((e,index) =>{
    if (index === id) {
      e = task
    }
  }}*/

  return (
    <div className="Container">
      <header>
        <title>Task List</title>
        <h1>LISTA DE TAREAS</h1>
        <TaskForm newTask={newTask} />

        <div className="list">
          {taskList.map(
            (
              e,
              index //se tiene el indice y las tareas se pasan por props
            ) => (
              <Task
                task={e}
                erase={erase} //se pasa la funciòn de borrar
                id={index}
                edit={updateTask}
              /> //
            )
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

//<TaskForm newTask={newTask} /> con esto se pasa la funciòn newtask como propiedad al componente de la tare
