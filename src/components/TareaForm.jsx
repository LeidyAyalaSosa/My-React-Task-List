import React, { useState } from "react";
import "../App.css";

//este formulario es para añadir las tareas

//este es el componente, sus propiedades
const TaskForm = (props) => {
  //deberìa permitirme añadir tareas
  const [inputText, setInputText] = useState(""); //mi estado, inputtext para actualizarlo
  const [validation, setValidation] = useState(true); //estado para que cuando no haya nada escrito no se pueda añadir nada

  const handleForm = (event) => {
    //para lograr que cada vez que agregue algo al input se actualice el estado con el parametro event capturo el mismo
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      // para comprobar el estado del inputtext o comprobar si hay algo o no trim para comprobar que haya algo y que no sean espacios
      props.newTask(inputText); // esto es para añadir la nueva tarea, se usa la funciòn en el estado de la tarea
      setInputText(""); //el valor del input es nada
      setValidation(true); // asegurar que la validaciòn estè en verdadero
    } else {
      //si no hay nada no funciona
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

export default TaskForm; //exporto el componente

//onchange permite que cada vez que agrego algo en el input se ejecute handleevent
//submit envìa el valor del input a app y preventdefault evita que se actualice la página cada vez que se toca el boton
