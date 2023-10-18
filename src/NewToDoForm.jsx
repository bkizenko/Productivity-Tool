import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    onSubmit
    const [newItem, setNewItem] = useState("") // adds interactivity, connects front-end and back-end

    function handleSubmit(e) {
        e.preventDefault()
        // important for using the current value
        if (newItem === "") return

        onSubmit(newItem) // or can take props as an arg and do props.onSubmit, just onSubmit is called "destructuring"
        setNewItem("")
        
      }

    return <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> New Item</label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} // whenever i change input new value sets new item. e means event
        type="text" id ="item" /> 
    </div>
    <button className ="btn" > Add </button>
  </form>
}