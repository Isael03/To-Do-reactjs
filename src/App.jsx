import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

import { useToDoList } from './hooks/useToDoList'

function App() {
  
  const { todos, setTodos, deleteTodo } = useToDoList()

  return (
    <div className="App">
      <h1>To-Do App React</h1>
      <Form style={{marginBottom:20}} setTodos={setTodos} todos={todos}/>
      <ToDoList todos={todos} deleteTodo={deleteTodo} setTodos={setTodos}/>
    </div>
  )
}

export default App
