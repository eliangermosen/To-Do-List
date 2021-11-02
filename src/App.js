import React, {useState, useEffect } from 'react';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';
import './App.css';

const key = 'todoApp.listaTareas';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(key));
        if(storedTodos) {
            setListaTareas(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(listaTareas))
    }, [listaTareas]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} />
      <div className="lista">
        {
        listaTareas.map((e, index) => <Tarea tarea={e} borrar={borrar} id={index}/>)
        }
      </div>
    </div>
  );
}

export default App;
