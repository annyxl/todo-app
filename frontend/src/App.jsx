import { useEffect, useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const updateTodos = () => {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(res => setTodos(res))
  }

  useEffect(() => {
    updateTodos()
  }, [])
  
  return (
    <main>
      <h1>Todo List</h1>
      <AddTodo updateTodos={updateTodos}/>
      <br></br>
      <Todos todos={todos} updateTodos={updateTodos} />
    </main>
  )
}

export default App
