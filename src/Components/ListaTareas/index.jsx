import React, { useState } from 'react';
import './styles.css'
import { NuevaTarea } from '../NuevaTarea';
export {ListaTareas}

const ListaTareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(0);
    const [filtro, setFiltro] = useState('All');

  const agregarTarea = (nuevaTarea) => {
    const tarea = {
        id: `tarea${contador}`,
        description: nuevaTarea,
        completed: false,
    };

    setTareas([...tareas, tarea]);
    setContador(contador + 1);
  };

  const toggleCompletado = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  const eliminarCompletadas = () => {
    const tareasSinCompletar = tareas.filter((tarea) => !tarea.completed);
    setTareas(tareasSinCompletar);
  };

  const tareasRestantes = tareas.filter((tarea) => !tarea.completed).length;

    return(
        <section>
            <NuevaTarea agregarTarea={agregarTarea} />
            <div id="todo-list-container">
                <div id="todo-list">   
                    {tareas.map((tarea) => (
                        <div key={tarea.id} className="todo-list-item">
                        <input 
                            type="checkbox" 
                            className="todo-list-checkbox"
                            checked={tarea.completed}
                            onChange={() => toggleCompletado(tarea.id)} />
                        <span>{tarea.description}</span>
                        </div>
                    ))}
                    <div id='todo-list-options'>
                        <div id='todo-items-left'>
                            <p>{tareasRestantes} items left</p>
                        </div>
                        <div id='todo-items-filter'>
                            <p>All</p>
                            <p>Active</p>
                            <p>Completed</p>
                        </div>
                        <div id='todo-items-clear'>
                            <p onClick={eliminarCompletadas}>Clear completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}