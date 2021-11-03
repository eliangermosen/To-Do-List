import React, {useState} from "react";
import '../App.css';

const Tarea = (props) => {

    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const Editar = () => {
        setEdit(true);
    }

    const manejarEdit = (event) => {
        setEditText(event.target.value);
    }

    const enviarEditar = (event) => {
        event.preventDefault();
        props.editar(props.id, editText);
        setEditText("");
        setEdit(false);
    }

    const cancelEditar = () => {
        //setEditText();
        setEdit(false);
    }

    const borrarTarea = () => {
        props.borrar(props.id);
    };

    return (
    <div>
        {
            !edit ? 
            <div className="tarea">
                <span>{props.tarea}</span><span className="spn-editar" onClick={Editar}>✏️</span><span className="spn-borrar" onClick={borrarTarea}>🗑️</span>
            </div>
            : 
            <form className="form-editar" onSubmit={enviarEditar}>
                <input value={editText} onChange={manejarEdit} /><button>💾</button><button onChange={cancelEditar}>❌</button>
            </form>
        }
    </div>
    );
}

export default Tarea;