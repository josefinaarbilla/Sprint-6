import React, { useState } from 'react';
import './styles.css'
import { NuevaTarea } from '../NuevaTarea';
export {ListaTareas}

const ListaTareas = ({theme}) => {

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

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const tareasFiltradas = () => {
    if (filtro === 'All') {
      return tareas;
    } else if (filtro === 'Active') {
      return tareas.filter((tarea) => !tarea.completed);
    } else if (filtro === 'Completed') {
      return tareas.filter((tarea) => tarea.completed);
    }
  };

   const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

    return(
        <section id='todo-list-section'>
            <NuevaTarea agregarTarea={agregarTarea} theme={theme}/>
            <div id="todo-list-container" className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
                <div id="todo-list" className={theme === 'light' ? 'light-mode' : 'dark-mode'}>   
                    {tareasFiltradas().map((tarea) => (
                        <div key={tarea.id} className={`todo-list-item ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}>
                        <input 
                            type="checkbox" 
                            className={`todo-list-checkbox ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
                            checked={tarea.completed}
                            onChange={() => toggleCompletado(tarea.id)} />
                        <span>{tarea.description}</span>
                        <img src='../../../public/images/icon-cross.svg'  alt="" onClick={() => borrarTarea(tarea.id)}/>
                        </div>
                    ))}
                    <div id='todo-list-options' className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
                        <div id='todo-items-left'>
                            <p>{tareasRestantes} items left</p>
                        </div>
                        <div id='todo-items-filter' className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
                            <p className={filtro === 'All' ? 'clicked' : ''} onClick={() => filtrarTareas('All')}>All</p>
                            <p className={filtro === 'Active' ? 'clicked' : ''} onClick={() => filtrarTareas('Active')}>Active</p>
                            <p className={filtro === 'Completed' ? 'clicked' : ''} onClick={() => filtrarTareas('Completed')}>Completed</p>
                        </div>
                        <div id='todo-items-clear' className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
                            <p onClick={eliminarCompletadas}>Clear completed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='todo-items-filter-mobile' className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
                <p className={filtro === 'All' ? 'clicked' : ''} onClick={() => filtrarTareas('All')}>All</p>
                <p className={filtro === 'Active' ? 'clicked' : ''} onClick={() => filtrarTareas('Active')}>Active</p>
                <p className={filtro === 'Completed' ? 'clicked' : ''} onClick={() => filtrarTareas('Completed')}>Completed</p>
            </div>
        </section>
    )
}