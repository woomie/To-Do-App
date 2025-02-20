import React, {useState} from 'react';
import TodoList from './TodoList';
import "./todo.css";



const TodoInput = () => {
  const [items, setItems]= useState([]);
  const [inputValue, setInputValue] =useState();

  function handleSetInputValue(event){
    setInputValue(event.target.value);
  }
  function handleSetItems(){
    setItems([...items, inputValue]);
    setInputValue("")
  }
   
  return (
    <div className='glass-card'>
      <div id="input-field" >
        <input type="text" placeholder='Add your task' value={inputValue} onChange={handleSetInputValue}/>
        <button onClick={handleSetItems}>Submit</button>
      </div>
        <TodoList listItem={items}/>
    </div>
  )
}

export default TodoInput
