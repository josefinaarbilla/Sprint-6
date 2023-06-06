export {NuevaTarea}
import { useState } from 'react'
import './styles.css'

const NuevaTarea = ({ agregarTarea }) => {
    
    const[newTodo, setNewTodo] = useState('')

    const inputTextChange = (e) =>
        setNewTodo(e.target.value)
        console.log(newTodo)

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (newTodo.trim() !== '') {
            agregarTarea(newTodo); // Llama a la función para agregar la tarea
            setNewTodo(''); // Reinicia el valor del input después de agregar la tarea
        }
        };

    return(
        <section id="new-todo-container">
            <form onSubmit={handleSubmit} action="">
                <input 
                id="new-todo" 
                type="text" 
                placeholder="Create a new todo..." 
                value={newTodo} 
                onChange={inputTextChange}/>
            </form>
        </section>
    )
}