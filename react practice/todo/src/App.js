import React, { useState } from 'react'
import Addtodo from './Addtodo';
import Tasklist from './Tasklist';
import Alert from './Alert';


let initial=[
  {id:0,title:"virat"},
  {id:1,title:"rohit"},
  {id:2,title:"bumrah"}
]
let i=3;
function App() {
  const [todo,setTodo]=useState(initial)

  function Handleadd(cricketname){
    setTodo(
      [
        ...todo,
        {
          id:i++,
          title: cricketname
        }
      ]
    )
  }

  function Handlechange(newtodo){
    setTodo(
      todo.map(t=>
        {
          if(t.id==newtodo.id)
          {
            return newtodo;
          }
          else{
            return t;
          }
        })
    )
  }

  function Handledelet(todoid){
    setTodo(
      todo.filter(t=>t.id!==todoid)
    )
  }
  return (
   
    <>
     
       <Addtodo
      addtodo={Handleadd}
      />
      <Tasklist
      Todo={todo}
      onchangetodo={Handlechange}
      ondelettodo={Handledelet}/>
      <Alert/>

    </>
  )
}

export default App
