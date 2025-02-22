import React from 'react'

const TodoItem = ({item, isChecked, deleted}) => {
  function handleClick(name){
    isChecked(name)
    console.log("this item was clicked", name);
    
  }
  function handleDelete(name){
    deleted(name);
    console.log(`${name} was deleted`)
  }
  return (
    <>
      <label className='item color' onClick={()=>handleClick(item.name)}>
        <input type="checkbox"/>
        {item.name}
        <i 
      className="fa fa-trash-o color" 
      onClick={(e) => {
      e.stopPropagation();
      handleDelete(item.name);
      }}>
    </i>
 
    </label>
            
            
    </>
  )
}

export default TodoItem
