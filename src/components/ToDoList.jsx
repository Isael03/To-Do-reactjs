import { useState } from 'react'
import {Checkbox} from './Checkbox'


function ToDoList({todos, deleteTodo, setTodos}) {

   
    function handleChangeTodoComplete(id){

        const toDoFound = todos.find((todo)=>{
           return todo.id === id
        })

       const toDoFiltered = todos.filter((todo)=>{
            return todo.id !== id
        })

        
        setTodos([ {
            userId: 1,
            id: toDoFound.id,
            title: toDoFound.title,
            completed: !toDoFound.completed
        }, ...toDoFiltered])
        console.log(todos);
    }

    return (
        <div style={{ borderRadius:"3px", borderColor:'black', borderWidth:"2px", borderStyle:'solid', padding:"10px" }}>
            <h2>Lista de tareas</h2>

            <ol style={{ textAlign: "left" }}>
                {todos.slice(0, 5).map((todo, index) => (
                    <li key={index}>{todo.title}
                        <Checkbox checked={todo.completed} onClick={()=>handleChangeTodoComplete(todo.id)} />
                        <button className='todoButton' onClick={() => deleteTodo(todo.id)}>Eliminar</button>
                    </li>
                ))}


            </ol>
        </div>
    )
}

export default ToDoList