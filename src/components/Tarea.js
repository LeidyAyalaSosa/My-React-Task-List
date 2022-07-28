import React, { useState } from "react";
import "../App.css";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");

  const edit = () => {
    setEditMode(true);
  };

  const handleEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.edit(props.id, editText);
    setEditText("");
    setEditMode(false);
  };

  const deleteTask = () => {
    props.erase(props.id);
  };

  return (
    <div>
      {!editMode ? (
        <div className="task">
          <input
            className="check"
            type="checkbox"
            onChange={() => console.log(Task.id)}
          />
          <label className="from-span">{props.task}</label>
          <label onClick={edit} className="span">
            Editar
          </label>
          <label onClick={deleteTask} className="span-uno">
            Borrar
          </label>
        </div>
      ) : (
        <form onSubmit={submitEdit}>
          <input
            value={editText}
            onChange={handleEdit}
            className="from-input"
          />
          <button>Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Task;
