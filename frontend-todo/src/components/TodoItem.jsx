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
    <div>
            <label className='item color' onClick={()=>handleClick(item.name)}>
              <input type="checkbox"/>
              {item.name}
              <i className="fa fa-trash-o color" onClick={handleDelete}></i>
            </label>
            
    </div>
  )
}

export default TodoItem
