import React, {useState} from 'react';
import '../App.css';

const TareaForm = (props) => {
    
    const [inputText, setInputText ] = useState("");
    
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) => {
        setInputText(event.target.value);
    }

    const enviar = (event) => {
        event.preventDefault();
        if (inputText.trim() !== "") {
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else {
            setValidacion(false);
        }
    }

    return (
        <div>
            <form action="form" className="form" onSubmit={enviar}>
                <label>Tarea: </label>
                <input type="text" placeholder="Nueva Tarea" value={inputText} onChange={manejarFormulario}></input>
                <button>➕</button>
            </form>
            {
                !validacion &&
                <div className="validacion">Agregue una tarea, por favor</div>
            }
        </div>
    );
}

export default TareaForm;