import React, {useState, useEffect } from 'react';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';
import Swal from 'sweetalert2'
import './App.css';

const key = 'todoApp.listaTareas';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const [busca, setBusca] = useState('');

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
    Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Su tarea ha sido guardada!',
    showConfirmButton: false,
    timer: 1000
  })
};

  const buscarTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const borrar = (id) => {
    Swal.fire({
      title: 'Esta seguro que desea eliminarla?',
      text: "Si elimina la tarea no podra revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminala!'
    }).then((result) => {
      if (result.isConfirmed) {
        const listaFiltrada = listaTareas.filter((e, index) => index !== id);
        setListaTareas(listaFiltrada);
        Swal.fire(
        'Eliminada!',
        'Su tarea ha sido eliminada!',
        'success'
        )
      }
    })
  };

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if(index === id){
        e = tarea;
      }
      return e;
    })
    setListaTareas(listaActualizada);
  }

  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} buscarTarea={buscarTarea} />
      <div className="lista">
        {
        listaTareas.map((e, index) => <Tarea tarea={e} borrar={borrar} id={index} editar={actualizarTarea}/>)
        }
      </div>
    </div>
  );
}

export default App;
