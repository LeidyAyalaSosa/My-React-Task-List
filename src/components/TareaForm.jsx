import React, { useState } from 'react';

const taskForm = (props) => {
    const [inputText, setInputText] = useState("");

    const handleForm = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
    
    }

    return (
        <div>
            <form className="Container" onSubmit={submit}>
                <label>Agregar tarea</label>
                <input value={inputText} onChange={handleForm}/>
                <button>Agregar</button>
            </form>
        </div>
        
    )
}

export default taskForm;
