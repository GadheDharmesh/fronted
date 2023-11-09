import { useState } from 'react';

const beforecss={
  background:'white',
  color:'black'
}
const aftercss={
  background:'black',
  color:'white'
}
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [css, setCss] = useState(beforecss);
  return (
    <>
      <input
        placeholder="Add"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
      style={css}
       onClick={() => {
        setTitle('');
        
        onAddTodo(title);
        
          if(css==beforecss){
            setCss(aftercss);
          }
          else{
            setCss(beforecss);
          }
        
      }}>Add</button>
    </>
  )
}