import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';

const AddTodo = () => {
  //start with an empty input then onchange use settodoitem to change input
  const [todoItem, setTodoItem] =useState("");
  const [listItem , setListItem] = useState([]);

  useEffect(()=>{
    fetchTodoList();
  })

  function handleSetTodoItem(event){
    //this is the list item, my todolist is now an array of objects
    setTodoItem({name:event.target.value, done: false});

  }
  function handleSetListItem(){
    setListItem([...listItem, todoItem]);
    setTodoItem({name:"", done:false});
  }
  function isChecked(name){
    setListItem(
      listItem.map((item)=>
         item.name === name ? {...item, done:!item.done} : item
      )
    ) 
  }
  function handleDeleteItem(name) {
    setListItem(listItem.filter(item => item.name !== name));  // Filter out the deleted item
  }
  //console.log(todoItem)
  return (
    <div className='glass-card'>
      <h2 className='font color'>To-do List</h2>
       <div className= "container">
            <input type="text" id="tasks" placeholder="Add tasks..." value={todoItem.name||""} onChange={handleSetTodoItem}/>
            <button className="submit" onClick={handleSetListItem}>Add</button>
        </div>
        <TodoList list={listItem} isChecked={isChecked} onDelete={handleDeleteItem} />
    </div>
  )
}

export default AddTodo
