import React, { useState } from "react"; //este es el componente tarea
import "../App.css";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false); //estado es un buleano que es falso o verdadero segùn se le pulse
  const [editText, setEditText] = useState(""); //estado que controla el input de editar

  const edit = () => {
    //funciòn para editar
    setEditMode(true);
  };

  const handleEdit = (event) => {
    //funciòn manejar edit, evento
    setEditText(event.target.value); //Establecer ediciòn de texto, evento, targeta y valor
  };

  const submitEdit = (event) => {
    //enviar ediciòn, evento
    event.preventDefault(); //evita que la app se actualice a cada momento
    props.edit(props.id, editText); //propiedades de edit, las propiedades que se quieren editar
    setEditText(""); //vaciar (o enviar) texto editado
    setEditMode(false); //para que mande las tareas y no el formulario de editar
  };

  const deleteTask = () => {
    //funciòn borrar tarea, se llaman las propiedades
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

//esto es porque las tareas se van a pasar por props
//{!editMode ? (se llama operador ternario) si se le da editar cambia el estado, si la tarea no se edita va a salir normal pero si sì se va a actualizar
//<input value={editText onChange={handleEdit} en el input va el valor que es igual al editar texto y en cambio o en cambioe està manejar ediciòn

//para hacer la check box creo que debe crearse el estado, la funciòn, el condicional y la funciòn que controle la checkbox
