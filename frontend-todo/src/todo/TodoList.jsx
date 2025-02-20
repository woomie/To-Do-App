import React from 'react'

const TodoList = (props) => {
  return (
    <div>
            {props.listItem.map((item, index)=>{
                return(<div key={index}>
                   <p>{item}</p> 
                </div>)
            })}
       
    </div>
  )
}

export default TodoList
