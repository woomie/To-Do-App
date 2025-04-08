import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import Toggle from './Toggle';

const AddTodo = () => {
  //start with an empty input then onchange use settodoitem to change input
  const [todoItem, setTodoItem] =useState("");
  const [listItem , setListItem] = useState([]);

  useEffect(()=>{
    fetchTodoList();
  },[]);

  //function to get the data
  async function fetchTodoList(){
    try{
      const response = await fetch (`${process.env.REACT_APP_API_URL}/todos`);
      console.log("response status", response.status);
      if(response.ok){
        const jsonResponse = await response.json();
        console.log("Data recieved", jsonResponse);
        setListItem(jsonResponse.todoList);
      }
    }
    catch(error){
      console.log(error);
    }
  }
  function handleSetTodoItem(event){
    //this is a single list item. My todolist is now an array of objects
    //id:count+1
    setTodoItem({ name:event.target.value, done: false});

  }
  //the post request to the API
  async function handleSetListItem(){
    //const newTask = {text: todoItem.name, done: todoItem.done};
    try{
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoItem),
      });
      const newTodo = await response.json();
      //new todo returns a json that includes a message and the data, so we are accessing just the data
      setListItem([...listItem, newTodo.data]);
      setTodoItem({name:"", done:false});
    }
    catch(error){
      console.error("Error adding new todo:", error);
    }
  }
  async function isChecked(id){
    const updatedDoneStatus = !listItem.find(item => item.id === id).done;
    try{
      const response = await fetch(`http://localhost:5000/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({done:updatedDoneStatus}),
      });
      if (!response.ok) {
        throw new Error("Failed to update the item");
      }
      const updatedTodo = await response.json();
      setListItem(
        listItem.map((item)=>
           item.id === id ? {...item, done:updatedDoneStatus} : item
        )
      ) 
      console.log("updated successfully", updatedTodo);
    }
    
    catch(error){
      console.log(error)
    }
  }
    
  async function handleDeleteItem(id) {
    try{
      
      const response = await fetch(`http://localhost:5000/${id}`,{
        method:"DELETE",
      });

      //const deletedData = await response.json();
      if (!response.ok) {
        throw new Error("Failed to delete the item");
      }
      setListItem(listItem.filter(item => item.id !== id)); 
      console.log("item deleted successfully")

    }
    catch(error){
      console.error(error);
    }
      // Filter out the deleted item
  }
  
  return (
    <div className='glass-card'>
      <Toggle/>
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
