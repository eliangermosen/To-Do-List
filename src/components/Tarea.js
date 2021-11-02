import React from "react";
import '../App.css';

const Tarea = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    };

    return (
    <div>
        <div className="tarea">
            <span>{props.tarea}</span><span className="spn-editar">✏️</span><span className="spn-borrar" onClick={borrarTarea}>🗑️</span>
        </div>
    </div>
    );
}

export default Tarea;