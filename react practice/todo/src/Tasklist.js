import React, { useRef, useState } from 'react'

function Tasklist({Todo,onchangetodo,ondelettodo}) {
  return (
    <>
      <ul>
        {
          Todo.map(todo =>(
            <li key={todo.id}>
              <Task
              todo={todo}
              todoChange={onchangetodo}
              tododelet={ondelettodo}
              />
            </li>
          ))
        }
          
      </ul>
    </>
  )
}
function Task({todo,todoChange,tododelet}){
    let content;
    const[edit,setedit]=useState(false);
    const hi= useRef();
    if(edit)
    {
      content=(
        <>    
        <input
        value={todo.title}
        onChange={e=>{
            todoChange(
              {
                ...todo,
                title:e.target.value
              }
             
            );
        }}/> 
         <button onClick={()=>{
        setedit(false)}}>
        Save</button>
      </>
)
    }
    else
    {
      content=(
        <> 
          {todo.title}
            <button onClick={()=>{
             setedit(true)}}>
            Edit</button>
      </> 
)
    }

    return(
        <>
        {content}
        <button onClick={()=>
        tododelet(todo.id)} ref={hi}>Delet</button>
        {console.log(hi)}
        {console.log(hi.current)}
        </>
    )
}

export default Tasklist
