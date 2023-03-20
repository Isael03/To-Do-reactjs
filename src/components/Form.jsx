import {useState} from 'react'

export default function Form({style, setTodos, todos}) {
  const [form, setform] = useState({
    task:"",
  })

  function handleChange(e){
    setform({
      ...form,
      task: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    if(form.task){
      setTodos([{
        id: todos.length+1,
        title: form.task,
        userId: 1,
        completed:false
      },
        ...todos])
    }
    

  }

  return (
    <div style={style}>
    <h2>Ingrese una nueva tarea</h2>
    <form>
        <input type="text" value={form.task} onChange={handleChange}/>
        <br />
        <input type="submit" value="Agregar" onClick={(event)=>handleSubmit(event)}/>
    </form>
    </div>
  )
}

