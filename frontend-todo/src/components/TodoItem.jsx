import React from 'react'

const TodoItem = ({item, isChecked, deleted}) => {
  function handleClick(id){
    isChecked(id)
    
  }
  function handleDelete(id){
    console.log("deleted", id)
    deleted(id);
  }
  return (
    <>
      <label className='item color' onClick={()=>handleClick(item.id)}>
        <input type="checkbox"/>
        {item.name}
        <i 
      className="fa fa-trash-o color" 
      onClick={(e) => {
      e.stopPropagation();
      handleDelete(item.id);
      }}>
    </i>
 
    </label>
            
            
    </>
  )
}

export default TodoItem
