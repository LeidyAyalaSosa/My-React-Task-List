import React, { useState } from "react";

const task = (props) => {

    const deleteTask = () => {
        props.erase(props.id);
    }

    return (
        <div>

                <div className="task">
                    <label>{props.task}</label>
                    <label onClick={edit}>Editar</label>
                    <label onClick={deleteTask}>Borrar</label>
                </div>
            
        </div>
    )
}

export default task;
