import React from 'react'

const TodoList = () => {
  return (
    <div className="glass-card">
        <h3>To-Do List</h3>
        <div class= "container">
            <input type="text" id="tasks" placeholder="Add tasks..."/>
            <button className="submit">Add</button>
        </div>
        <div className="list">
            <input type="checkbox" class="checkbox"/>
            <p className='color'>Hello</p>
            <i className="fa fa-trash-o color"></i>
        </div>
        
      
    </div>
  )
}

export default TodoList
