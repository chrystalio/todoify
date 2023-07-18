import { useState } from "react";
import "./style.css"


export default function App(){
  const [newItem, setNewItem, ] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })

    setNewItem("");
  }


  function toggleTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  
  return (
    <>
      <h1 className="title text-center">Todoify</h1>

      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item :</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" name="item" />
        </div>
        <button className="btn">
          Add Item
        </button>
      </form>

      <h1 className="header">To Do List :</h1>
      <ul className="list">
      { todos.length === 0 && "Empty List"}
      {todos.map((todo => {
        return (
          <li key={todo.id}>
            <label>
            <input
              type="checkbox"
              onChange={() => toggleTodo(todo.id)}
              checked={todo.completed}
            />
            {todo.title}
          </label>
          <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        )
      }))}
      </ul>
      <h4 className="footer-text">Made By <a href="https://github.com/chrystalio"><u>Kristoff</u></a></h4>
    </>
  );
}