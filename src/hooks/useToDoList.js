import { useEffect, useState } from "react";
import { TodoFetch } from "../services/ToDoFetch";

export function useToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect( () => {

    (async ()=>{
        const data = await TodoFetch();
        setTodos(data);
    })()
   
  }, []);


  function deleteTodo(id){

    const newTodos = todos.filter((todo)=>todo.id != id)

    setTodos(newTodos);
  }

  return {
    todos,
    setTodos,
    deleteTodo
  };
}
