import React, { useState } from 'react'

function Addtodo({addtodo}) {
  const[cricketername,setTitle]=useState('')
  return (
    <>
      <input
      value={cricketername}
      onChange={(e)=>{setTitle(e.target.value)}}/>
      <button
      onClick={
        ()=>{
          setTitle("");
          addtodo(cricketername)
        }
      }>ADD</button>
    </>
  )
}

export default Addtodo
