import React, { useState } from "react";
import "../App.css";

const TaskForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validation, setValidation] = useState(true);

  const handleForm = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.newTask(inputText);
      setInputText("");
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label className="from-label">Agregar tarea</label>
        <input value={inputText} onChange={handleForm} className="from-input" />
        <button>Agregar</button>
      </form>
      {!validation && (
        <div className="validation">No se han añadido tareas</div>
      )}
    </div>
  );
};

export default TaskForm;
