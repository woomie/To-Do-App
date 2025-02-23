import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({list, isChecked, onDelete}) => {
  //console.log(list);
  const renderedList = list.map((listItem, index)=>{
    return(
      <li key={index}>
        <TodoItem item={listItem} isChecked={isChecked} deleted={()=> onDelete(listItem.id)} />
      </li>
    )
  });
 

  return (
   <>
       <ul className='list'>{renderedList}</ul> 
      
    </>
  )
}

export default TodoList
