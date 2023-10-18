import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewToDoForm"
import "./styles.css"
import { TodoList } from "./TodoList"


export default function App() {
  // not allowed to change value of state. newItem, setNewItem is common format

  // what is this
    const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem("ITEMS")
      if (localValue == null) return []
      return JSON.parse(localValue)
    })

  // run this func every time ojects inside array of second property change
    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
          ...currentTodos,
          // idk wtf this is 
          { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }
  // updates todos to change id of todos to be completed based on flag
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // need to do it like this because state is immutable, creating a new state object
          return { ...todo, completed }
        }

        return todo 
      })
    })

  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
    // arrows are called fragment, handleSubmit call and function adds item to list
    <> 
    < NewTodoForm onSubmit = {addTodo} />
    <h1 className="header"> Todo List </h1>
    < TodoList todos= {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}










